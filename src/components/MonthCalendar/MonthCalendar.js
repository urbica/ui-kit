import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Style
import MonthWrap from './MonthWrap';
import Month from './Month';
import YearSelector from './YearSelector/YearSelector';

class MonthCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: new Date().getFullYear(),
      date: new Date()
    };

    this.onClickMonth = this.onClickMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.onChange(nextState.date);
  }

  onClickMonth(date) {
    this.setState({ date });
  }

  onChangeYear(value) {
    this.setState({ year: this.state.year + value });
  }

  render() {
    const { date, year } = this.state;
    const { months, disabled } = this.props;

    return (
      <div>
        <YearSelector
          year={year}
          onChange={this.onChangeYear}
        />
        <MonthWrap>
          {
            months.map((month, i) => {
              const isActive = date.getMonth() === i && date.getFullYear() === year;
              const currentDate = new Date(date);

              currentDate.setMonth(i);
              currentDate.setFullYear(year);

              return (
                <Month
                  key={month}
                  onClick={this.onClickMonth.bind(null, currentDate)}
                  isActive={isActive}
                  isDisabled={disabled(currentDate)}
                >
                  {month}
                </Month>
              );
            })
          }
        </MonthWrap>
      </div>
    );
  }
}

MonthCalendar.propTypes = {
  onChange: PropTypes.func,
  months: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.func
};

MonthCalendar.defaultProps = {
  onChange: () => {},
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

export default MonthCalendar;
