import React, { Component } from 'react';

// Style
import MonthWrap from './MonthWrap';
import Month from './Month';
import YearSelector from "./YearSelector/YearSelector";

const months = [
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
];

class MonthCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };

    this.onClickMonth = this.onClickMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.onChange(nextState.date);
  }

  onClickMonth(month) {
    const { date } = this.state;
    date.setMonth(month);
    this.setState({ date });
  }

  onChangeYear(value) {
    const { date } = this.state;
    date.setFullYear(date.getFullYear() + value);
    this.setState({ date });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <YearSelector
          date={date}
          onChange={this.onChangeYear}
        />
        <MonthWrap>
          {
            months.map((month, i) => (
              <Month
                key={month}
                onClick={this.onClickMonth.bind(null, i)}
                isActive={date.getMonth() === i}
              >
                {month}
              </Month>
            ))
          }
        </MonthWrap>
      </div>
    );
  }
}

export default MonthCalendar;
