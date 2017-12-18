import styled from 'react-emotion';

export default styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  background-color: white;
  z-index: 5;
  
  input {
    display: block;
  }
  
  ${props => props.multiple && `
    .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
      background-color: #f0f8ff !important;
      color: #4a90e2;
    }
    .Selectable .DayPicker-Day {
      border-radius: 0 !important;
    }
    .Selectable .DayPicker-Day--start {
      border-top-left-radius: 50% !important;
      border-bottom-left-radius: 50% !important;
    }
    .Selectable .DayPicker-Day--end {
      border-top-right-radius: 50% !important;
      border-bottom-right-radius: 50% !important;
    }`};
`;
