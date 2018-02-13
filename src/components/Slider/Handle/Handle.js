import React from 'react';
import Container from './Container';
import Label from './Label';

const Handle = ({ position, tooltipPosition, label }) => (
  <Container position={position} tooltipPosition={tooltipPosition}>
    <Label>{label}</Label>
  </Container>
);

export default Handle;
