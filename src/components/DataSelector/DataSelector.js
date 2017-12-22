import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DateUtils } from 'react-day-picker';
import enhanceWithClickOutside from 'react-click-outside';
import Calendar from '../Calendar';
import dateParse from '../../utils/dateParse';

// Style
import Container from './Container';
import CalendarContainer from './CalendarContainer';
import Text from './Text';
import Name from './Name';

/**
 * @component
 */

class DataSelector extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive,
      startDate: this.props.startDate,
      endDate: this.props.endDate
    };

    this.toggle = this.toggle.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this._renderCalendar = this._renderCalendar.bind(this);
    this._renderDate = this._renderDate.bind(this);
  }

  toggle() {
    this.setState({ isActive: !this.state.isActive });
  }

  handleClickOutside() {
    this.setState({ isActive: false });
  }

  handleDayClick(day) {
    const { multiple, onChange } = this.props;

    if (multiple) {
      const range = DateUtils.addDayToRange(day, this.state);
      onChange(range);

      this.setState({
        startDate: range.from,
        endDate: range.to
      });
    } else {
      onChange({ startDate: day });
      this.setState({ startDate: day });
    }
  }

  _renderDate() {
    const { startDate, endDate } = this.state;
    const start = dateParse(startDate);
    const end = dateParse(endDate);

    return endDate ? `${start} – ${end}` : start;
  }

  _renderCalendar() {
    const { startDate, endDate } = this.state;
    const { multiple } = this.props;
    const modifiers = { start: startDate, end: endDate };

    return (
      <CalendarContainer
        onClick={e => e.stopPropagation()}
        multiple={multiple}
      >
        <Calendar
          className={multiple ? 'Selectable' : null}
          modifiers={multiple ? modifiers : null}
          selectedDays={[startDate, { startDate, endDate }]}
          onDayClick={this.handleDayClick}
        />
      </CalendarContainer>
    );
  }

  render() {
    const { isActive } = this.state;

    return (
      <Container onClick={this.toggle}>
        <Name>{this.props.name}</Name>
        <Text>{this._renderDate()}</Text>
        { isActive && this._renderCalendar() }
      </Container>
    );
  }
}

DataSelector.propTypes = {
  isActive: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.node,
  multiple: PropTypes.bool,
  name: PropTypes.node,
  onChange: PropTypes.func.isRequired
};

DataSelector.defaultProps = {
  isActive: false,
  startDate: new Date(),
  endDate: PropTypes.Null,
  multiple: false,
  name: 'Дата'
};

export default enhanceWithClickOutside(DataSelector);
