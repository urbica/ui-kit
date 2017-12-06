import styled from 'react-emotion';

export default styled.input`
  width: 100%;
  height: 34px;
  
  &[type=range] {
    -webkit-appearance: none;
  }

  &[type=range]::-webkit-slider-runnable-track {
      height: 2px;
      background: #000000;
      border: none;
      border-radius: 1px;
  }
  
  &[type=range]::-webkit-slider-thumb {
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
  &[type=range]:focus {
      outline: none;
  }
  
  &[type=range]::-moz-range-track {
    height: 2px;
    background: #000000;
    border: none;
    border-radius: 1px;
  }

  &[type=range]::-moz-range-thumb {
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
  &[type=range]:-moz-focusring{
      outline: 1px solid white;
      outline-offset: -1px;
  }
  
  &[type=range]:focus::-moz-range-track {
      background: transparent;
  }
  
  &[type=range]::-ms-track {
      height: 2px;
      background: #000000;
      border: none;
      border-radius: 1px;
  }
  
  &[type=range]::-ms-fill-lower {
      background: #777;
      border-radius: 10px;
  }
  
  &[type=range]::-ms-fill-upper {
      background: #ddd;
      border-radius: 10px;
  }
  
  &[type=range]::-ms-thumb {
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
  
  &[type=range]:focus::-ms-fill-lower {
      background: #888;
  }
  
  &[type=range]:focus::-ms-fill-upper {
      background: #ccc;
  }
`;
