import styled from 'react-emotion';

export default styled.span`
  position: absolute;
  transform: translateX(-50%);
  font-weight: ${props => (props.isActive ? 600 : 'normal')};
  width: max-content;
`;
