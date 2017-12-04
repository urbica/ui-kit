import React from 'react';
import styled from 'react-emotion';

const Button = styled.button`
  background-color: salmon;
  border: 1px solid indianred;
  color: snow;
`;

/**
 * @component
 */
export default props => <Button {...props} />;
