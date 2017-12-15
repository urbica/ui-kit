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
      from: this.props.from,
      to: this.props.to
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
    if (this.props.multiple) {
      const range = DateUtils.addDayToRange(day, this.state);
      this.props.onChange(range);
      this.setState(range);
    } else {
      this.props.onChange({ from: day });
      this.setState({ from: day });
    }
  }

  _renderDate() {
    const { from, to } = this.state;
    const start = dateParse(from);
    const end = dateParse(to);

    if (to) {
      return `${start} – ${end}`;
    }

    return start;
  }

  _renderCalendar() {
    const { from, to } = this.state;
    const { multiple } = this.props;
    const modifiers = { start: from, end: to };

    return (
      <CalendarContainer
        onClick={e => e.stopPropagation()}
        multiple={multiple}
      >
        {
          multiple ? (
            <Calendar
              className="Selectable"
              modifiers={modifiers}
              selectedDays={[from, { from, to }]}
              onDayClick={this.handleDayClick}
            />
          ) : (
            <Calendar
              selectedDays={from}
              onDayClick={this.handleDayClick}
            />
          )
        }
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
  from: PropTypes.instanceOf(Date),
  to: PropTypes.node,
  multiple: PropTypes.bool,
  name: PropTypes.node,
  onChange: PropTypes.func.isRequired
};

DataSelector.defaultProps = {
  isActive: false,
  from: new Date(),
  to: PropTypes.Null,
  multiple: false,
  name: 'Дата'
};

export default enhanceWithClickOutside(DataSelector);
