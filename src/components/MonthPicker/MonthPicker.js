import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Style
import Container from './Container';
import Month from './Month';

class MonthPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };

    this.onClickMonth = this.onClickMonth.bind(this);
  }

  onClickMonth(date) {
    this.setState({ date });
    this.props.onChange(date);
  }

  render() {
    const { date } = this.state;
    const { months, disabled, activeYear } = this.props;

    return (
      <Container>
        {
          months.map((month, i) => {
            const isActive = date.getMonth() === i && activeYear;
            const currentDate = new Date(date);
            currentDate.setMonth(i);

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
      </Container>
    );
  }
}

MonthPicker.propTypes = {
  onChange: PropTypes.func,
  activeYear: PropTypes.bool,
  months: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.func
};

MonthPicker.defaultProps = {
  onChange: () => {},
  disabled: () => false,
  activeYear: true,
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

export default MonthPicker;
