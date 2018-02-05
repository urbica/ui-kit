import styled from 'react-emotion';


export default styled.div`
  position: absolute;
  height: 2px;
  top: calc(50% - 1px);
  left: ${props => props.slider1 || 0}%;
  right: ${props => (props.slider2 ? 100 - props.slider2 : 0)}%;
  background: black;
`;

