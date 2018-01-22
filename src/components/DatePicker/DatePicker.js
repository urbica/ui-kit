import React, { PureComponent } from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import { START_DATE } from 'react-dates/constants';
import 'react-dates/lib/css/_datepicker.css';

import DropDownWrapper from '../DropdownWrapper/DropdownWrapper';
import Button from '../Button/Button';
import MenuOuter from './MenuOuter';

class DatePicker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      focusedInput: START_DATE,
      startDate: null,
      endDate: null
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput: focusedInput || START_DATE });
  }


  render() {
    const { startDate, endDate, focusedInput } = this.state;

    return (
      <DropDownWrapper
        opener={(toggle, isOpen) => (
          <Button
            isOpen={isOpen}
            onClick={toggle}
          >
            {startDate ? startDate.format('DD.MM.YYYY') : 'Выберите дату'}
            {
              endDate && endDate !== startDate &&
                ` - ${endDate.format('DD.MM.YYYY')}`
            }
          </Button>
        )}
      >
        <MenuOuter onClick={e => e.stopPropagation()}>
          <DayPickerRangeController
            startDate={startDate} // momentPropTypes.momentObj or null,
            endDate={endDate} // momentPropTypes.momentObj or null,
            focusedInput={focusedInput}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            minimumNights={0}
            noBorder
          />
        </MenuOuter>
      </DropDownWrapper>
    );
  }
}

export default DatePicker;
