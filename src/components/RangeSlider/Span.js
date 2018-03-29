import styled from 'react-emotion';

export default styled.span`
  font-weight: ${props => (props.isActive ? 600 : 'normal')};
`;
