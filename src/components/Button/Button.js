import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  border: 1px solid #303d41;
  border-right: 0;
  align-items: center;
  justify-content: center;
  
  background-color: 'white';
  color: #303d41;
  
  &:hover {
    cursor: pointer;
  }

  &:last-child {
    border-right: 1px solid #303d41;
  }
`;

/**
 * @component
 */
export default Button;
