import styled from 'react-emotion';

export default styled.div`
  position: relative;
  text-align: center;
  margin: auto auto ${props => (props.tooltip ? '20px' : 0)};
`;
