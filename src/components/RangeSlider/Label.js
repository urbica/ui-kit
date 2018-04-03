import styled from 'react-emotion';

export default styled.div`
  width: 1px;
  height: 16px;
  text-align: center;
  outline: none;
  
  @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {  
    /* IE10+ specific styles go here */
    span {
      transform: translateX(0);
    }
  }
`;
