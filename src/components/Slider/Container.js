import styled from 'react-emotion';

export default styled.div`
  position: relative;
  margin: auto;
  text-align: center;
  
  input {
    width: 100%;
    height: 34px;
  }
  
  input[type=range]{
    -webkit-appearance: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
      height: 2px;
      background: #000000;
      border: none;
      border-radius: 1px;
  }
  
  input[type=range]::-webkit-slider-thumb {
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
  input[type=range]:focus {
      outline: none;
  }
  
  input[type=range]::-moz-range-track {
    height: 2px;
    background: #000000;
    border: none;
    border-radius: 1px;
  }

  input[type=range]::-moz-range-thumb {
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
  input[type=range]:-moz-focusring{
      outline: 1px solid white;
      outline-offset: -1px;
  }
  
  input[type=range]:focus::-moz-range-track {
      background: transparent;
  }
  
  input[type=range]::-ms-track {
      height: 2px;
      background: #000000;
      border: none;
      border-radius: 1px;
  }
  
  input[type=range]::-ms-fill-lower {
      background: #777;
      border-radius: 10px;
  }
  
  input[type=range]::-ms-fill-upper {
      background: #ddd;
      border-radius: 10px;
  }
  
  input[type=range]::-ms-thumb {
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
  
  input[type=range]:focus::-ms-fill-lower {
      background: #888;
  }
  
  input[type=range]:focus::-ms-fill-upper {
      background: #ccc;
  }
`;
