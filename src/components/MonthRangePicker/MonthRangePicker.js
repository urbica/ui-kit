import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import checkDates from '../../utils/checkDates';

// Style
import Container from './Container';
import Month from './Month';

// Constants
const START_DATE = 'START_DATE';
const END_DATE = 'END_DATE';

class MonthRangePicker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { focused: null };

    this.onMonthChange = this.onMonthChange.bind(this);
  }

  onMonthChange(month) {
    const { focused } = this.state;
    const { startDate, endDate, activeYear } = this.props;

    if (!focused || focused === END_DATE) {
      const newStartDate = startDate.setFullYear(activeYear, month);
      const dates = checkDates(newStartDate, endDate);
      this.setState({ focused: START_DATE });
      this.props.onChange(dates);
    }

    if (focused === START_DATE) {
      const newEndDate = startDate.setFullYear(activeYear, month);
      const months = checkDates(startDate, newEndDate);
      this.setState({ focused: END_DATE });
      this.props.onChange(months);
    }
  }

  render() {
    const {
      months,
      disabled,
      startDate,
      endDate,
      activeYear
    } = this.props;

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();

    const isActive = month =>
      new Date(startYear, startMonth) <= new Date(activeYear, month) &&
      new Date(activeYear, month) <= new Date(endYear, endMonth);

    return (
      <Container>
        {
          months.map((month, i) => (
            <Month
              key={month}
              onClick={this.onMonthChange.bind(null, i)}
              isActive={isActive(i)}
              isDisabled={disabled(i)}
            >
              {month}
            </Month>
          ))
        }
      </Container>
    );
  }
}

MonthRangePicker.propTypes = {
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  activeYear: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.func
};

MonthRangePicker.defaultProps = {
  disabled: () => false,
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]
};

export default MonthRangePicker;
