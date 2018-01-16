import styled from 'react-emotion';
import arrow from './arrow.svg';

export default styled.div`
  width: 24px;
  height: 17px;
  background: url(${arrow});
  transform: rotate(${props => (props.right ? '180' : '0')}deg);
  
  &:hover {
    cursor: pointer;
  }
`;
