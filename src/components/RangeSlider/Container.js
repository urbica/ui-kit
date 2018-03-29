import styled from 'react-emotion';


export default styled.div`
  position: relative;
  height: 34px;
  margin-top: ${props => (props.visibleScale ? '15px' : 0)};

  input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

