import styled from 'react-emotion';

export default styled.span`
  width: 100px;
  font-weight: ${props => (props.isActive ? 600 : 'normal')};
`;
