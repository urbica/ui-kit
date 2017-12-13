import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
      startDate: this.props.startDate,
      endDate: this.props.endDate
    };

    this.onClick = this.onClick.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this._renderCalendar = this._renderCalendar.bind(this);
    this._renderDate = this._renderDate.bind(this);
  }

  onClick() {
    this.setState({ isActive: !this.state.isActive });
  }

  handleDayClick(day, { selected }) {
    this.setState({
      startDate: selected ? this.props.startDate : day
    });
  }

  _renderDate() {
    const { startDate, endDate } = this.state;
    const start = startDate.toLocaleString().substring(0, 10);
    const end = endDate && endDate.toLocaleString().substring(0, 10);

    if (endDate) {
      return `${start} – ${end}`;
    }

    return start;
  }

  _renderCalendar() {
    const { startDate, endDate } = this.state;

    return (
      <CalendarContainer onClick={e => e.stopPropagation()}>
        <Calendar
          selectedDays={startDate}
          onDayClick={this.handleDayClick}
        />
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
  name: PropTypes.node
};

DataSelector.defaultProps = {
  isActive: false,
  startDate: new Date(),
  endDate: PropTypes.Null,
  name: 'Дата'
};

export default DataSelector;
