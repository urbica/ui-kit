import styled from 'react-emotion';

export default styled.input`
  width: 100%;
  height: 34px;
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
   
  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-runnable-track {
      height: 2px;
      background: #000000;
      border: none;
      border-radius: 1px;
  }
  
  &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      height: 28px;
      width: 28px;
      background-color: #ffffff;
      border: solid 2px #000000;
      border-radius: 50%;
      margin-top: -14px;
      &:hover {
        cursor: pointer;
      }
  }

  // Firefox
  &:focus {
      outline: none;
  }
  
  &::-moz-range-track {
    height: 2px;
    background: #000000;
    border: none;
    border-radius: 1px;
  }

  &::-moz-range-thumb {
      -webkit-appearance: none;
      border: none;
      height: 28px;
      width: 28px;
      background-color: #ffffff;
      border: solid 2px #000000;
      border-radius: 50%;
      margin-top: -14px;
      &:hover {
          cursor: pointer;
        }
  }

  // IE
  
  &::-ms-track {
      height: 2px;
      background: transparent;
      border: none;
      color: transparent;
  }
  
  &::-ms-fill-lower {
      background: #000000;
  }

  &::-ms-fill-upper {
      background: #000000;
  }
  
  &::-ms-thumb {
      height: 28px;
      width: 28px;
      background-color: #ffffff;
      border: solid 2px #000000;
      border-radius: 50%;
      &:hover {
          cursor: pointer;
        }
  }
  
  &:focus::-ms-fill-lower {
      background: #000000;
  }
  
  &:focus::-ms-fill-upper {
      background: #000000;
  }
  
  &::-ms-tooltip {
    display: none;
  }
`;
