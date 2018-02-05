import React, { PureComponent } from 'react';
import 'react-dates/initialize';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import YearPicker from '../YearPicker/YearPicker';
import DropDownWrapper from '../DropdownWrapper/DropdownWrapper';
import Button from '../Button/Button';
import MenuOuter from './MenuOuter';

const getInitialState = () => ({
  from: null,
  to: null,
  enteredTo: null, // Keep track of the last day for mouseEnter.
  currentMonth: new Date()
});

const isSelectingFirstDay = (from, to, day) => {
  const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
  const isRangeSelected = from && to;
  return !from || isBeforeFirstDay || isRangeSelected;
};

class DatePicker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = getInitialState();

    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onMonthChange = this.onMonthChange.bind(this);
  }

  handleDayClick(day) {
    const { from, to } = this.state;
    if (from && to && day >= from && day <= to) {
      this.handleResetClick();
      return;
    }
    if (isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null
      });
    } else {
      this.setState({
        to: day,
        enteredTo: day
      });
    }
  }

  onChangeYear(year) {
    const newCurrentMonth = new Date(this.state.currentMonth);
    newCurrentMonth.setFullYear(year);
    this.setState({ currentMonth: newCurrentMonth });
  }

  onMonthChange(currentMonth) {
    this.setState({ currentMonth });
  }

  handleDayMouseEnter(day) {
    const { from, to } = this.state;
    if (!isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day
      });
    }
  }

  handleResetClick() {
    this.setState(getInitialState());
  }

  render() {
    const {
      from,
      to,
      enteredTo,
      currentMonth
    } = this.state;

    const modifiers = { start: from, end: enteredTo };
    const disabledDays = { before: this.state.from };
    const selectedDays = [from, { from, to: enteredTo }];

    return (
      <DropDownWrapper
        opener={(toggle, isOpen) => (
          <Button
            isOpen={isOpen}
            onClick={toggle}
          >
            {!from && !to && 'Please select the first day.'}
            {from && !to && 'Please select the last day.'}
            {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          </Button>
        )}
      >
        <MenuOuter onClick={e => e.stopPropagation()}>
          <YearPicker
            value={currentMonth.getFullYear()}
            onChange={this.onChangeYear}
          />
          <DayPicker
            className="Range"
            numberOfMonths={1}
            month={currentMonth}
            fromMonth={from}
            selectedDays={selectedDays}
            disabledDays={disabledDays}
            onMonthChange={this.onMonthChange}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
            onDayMouseEnter={this.handleDayMouseEnter}
          />
        </MenuOuter>
      </DropDownWrapper>
    );
  }
}

export default DatePicker;
