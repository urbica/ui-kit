import styled from 'react-emotion';


export default styled.div`
  position: absolute;
  height: 2px;
  top: calc(50% - 1px);
  left: ${props => props.percentLeft || 0}%;
  right: ${props => props.percentRight || 0}%;
  background: black;
`;

