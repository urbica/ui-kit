import styled from 'react-emotion';

export default styled.input`
  width: 100%;
  height: 34px;
  margin: 0;
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
  /*hide the outline behind the border*/
  &:-moz-focusring{
      outline: 1px solid white;
      outline-offset: -1px;
  }
  
  &::-ms-track {
      height: 2px;
      background: #000000;
      border: none;
      border-radius: 1px;
  }
  
  &::-ms-fill-lower {
      background: #777;
      border-radius: 10px;
  }
  
  &::-ms-fill-upper {
      background: #ddd;
      border-radius: 10px;
  }
  
  &::-ms-thumb {
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
  
  &:focus::-ms-fill-lower {
      background: #888;
  }
  
  &:focus::-ms-fill-upper {
      background: #ccc;
  }
`;
