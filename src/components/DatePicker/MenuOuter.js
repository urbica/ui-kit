import styled from 'react-emotion';

export default styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 10;
  background: white;
  
  box-shadow: 0 10px 18px -2px rgba(0,0,0,0.75);
  text-align: center;
  
  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }
  
  .Range .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Range .DayPicker-Day {
    border-radius: 0 !important;
  }
`;
