import React from 'react';
import PropTypes from 'prop-types';

// Style
import Button from './Button';
import Container from './Container';

const YearPicker = ({ value, onChange }) => (
  <Container>
    <Button onClick={onChange.bind(null, value - 1)} />
    {value}
    <Button onClick={onChange.bind(null, value + 1)} right />
  </Container>
);

YearPicker.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
};

YearPicker.defaultProps = {
  value: new Date().getFullYear(),
  onChange: () => {}
};

export default YearPicker;
