import React from 'react';
import Button from './Button';
import Container from './Container';

const YearSelector = ({ year, onChange }) => (
  <Container>
    <Button onClick={onChange.bind(null, -1)} />
    {year}
    <Button onClick={onChange.bind(null, 1)} right />
  </Container>
);

export default YearSelector;
