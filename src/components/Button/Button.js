import styled from 'react-emotion';

const Button = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  border: 1px solid #303d41;
  align-items: center;
  justify-content: center;
  
  background-color: '#FFFFFF';
  color: #303d41;
  
  &:hover {
    cursor: pointer;
  }
`;

/**
 * @component
 */
export default Button;
