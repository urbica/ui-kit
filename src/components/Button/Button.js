import React from 'react';

// Style
import Container from './Container';

/**
 * @component
 */

const Button = props => (
  <Container {...props}>
    {props.children}
  </Container>
);

export default Button;
