import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 28px;
  height: 16px;
  text-align: center;
  outline: none;
  cursor: pointer;
  
  span {
    position: absolute;
    transform: translateX(-50%);
  }
  
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
    /* IE10+ specific styles go here */
    span {
      transform: translateX(0);
    }
  }
`;
