import React from 'react';
import Button from './Button';
import Container from './Container';

const YearSelector = ({ date, onChange }) => (
  <Container>
    <Button onClick={onChange.bind(null, -1)} />
    {date.getFullYear()}
    <Button onClick={onChange.bind(null, 1)} right />
  </Container>
);

export default YearSelector;
