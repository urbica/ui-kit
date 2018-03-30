import styled from 'react-emotion';

export default styled.div`
  display: inline-block;
  font-weight: ${props => (props.isActive ? 600 : 'normal')};
`;
