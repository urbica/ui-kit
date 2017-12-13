import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DateUtils } from 'react-day-picker';
import Calendar from '../Calendar';

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
      from: this.props.startDate,
      to: this.props.endDate
    };

    this.onClick = this.onClick.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayRangeClick = this.handleDayRangeClick.bind(this);
    this._renderCalendar = this._renderCalendar.bind(this);
    this._renderDate = this._renderDate.bind(this);
  }

  onClick() {
    this.setState({ isActive: !this.state.isActive });
  }

  handleDayClick(day) {
    this.setState({
      from: day
    });
  }

  handleDayRangeClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  _renderDate() {
    const { from, to } = this.state;
    const start = from && from.toLocaleString().substring(0, 10);
    const end = to && to.toLocaleString().substring(0, 10);

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
              onDayClick={this.handleDayRangeClick}
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
      <Container onClick={this.onClick}>
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
  name: PropTypes.node,
  multiple: PropTypes.bool
};

DataSelector.defaultProps = {
  isActive: false,
  startDate: new Date(),
  endDate: PropTypes.Null,
  name: 'Дата',
  multiple: false
};

export default DataSelector;
