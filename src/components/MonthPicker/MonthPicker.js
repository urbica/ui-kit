import React from 'react';
import PropTypes from 'prop-types';

// Style
import Container from './Container';
import Month from './Month';

const MonthPicker = (props) => {
  const {
    value,
    months,
    disabled,
    onChange
  } = props;

  return (
    <Container>
      {
        months.map((month, i) => (
          <Month
            key={month}
            onClick={onChange.bind(null, i)}
            isActive={value === i}
            isDisabled={disabled(i)}
          >
            {month}
          </Month>
        ))
      }
    </Container>
  );
};

MonthPicker.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  months: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.func
};

MonthPicker.defaultProps = {
  value: new Date().getMonth(),
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

export default MonthPicker;
