import styled from 'react-emotion';

export default styled.div`
  display: block;
  border: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  outline: none;
  cursor: pointer;
  
  &:first-child {
    position: relative;
    text-align: left;
    
    span {
      position: absolute;
      transform: translateX(-50%);
    }
  }
  
  &:last-child {
    position: relative;
    text-align: right;
    
    span {
      position: absolute;
      transform: translateX(-50%);
    }
  }
`;
