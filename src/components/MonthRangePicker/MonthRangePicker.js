import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { checkMonths, isActive } from '../../utils/monthRangePicker';

// Style
import Container from './Container';
import Month from './Month';

// Constants
const START_DATE = 'START_DATE';
const END_DATE = 'END_DATE';

class MonthRangePicker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focused: null,
      startMonth: props.startMonth,
      endMonth: props.endMonth
    };

    this.onMonthChange = this.onMonthChange.bind(this);
  }

  onMonthChange(month) {
    const { focused, startMonth, endMonth } = this.state;

    if (!focused || focused === END_DATE) {
      const months = checkMonths(month, endMonth);
      this.setState({
        focused: START_DATE,
        ...months
      });

      this.props.onChange(months);
    }

    if (focused === START_DATE) {
      const months = checkMonths(startMonth, month);
      this.setState({
        focused: END_DATE,
        ...months
      });

      this.props.onChange(months);
    }
  }

  render() {
    const { startMonth, endMonth } = this.state;
    const { months, disabled } = this.props;

    return (
      <Container>
        {
          months.map((month, i) => (
            <Month
              key={month}
              onClick={this.onMonthChange.bind(null, i)}
              isActive={isActive(i, startMonth, endMonth)}
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
  startMonth: PropTypes.number,
  endMonth: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  months: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.func
};

MonthRangePicker.defaultProps = {
  startMonth: null,
  endMonth: null,
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
