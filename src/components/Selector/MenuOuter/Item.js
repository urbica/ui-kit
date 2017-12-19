import styled from 'react-emotion';

export default styled.li`
  display: flex;
  list-style-type: none;
  height: 50px;
  border-bottom: 1px solid gray;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  user-select: none;
  
  background-color: ${({ isActive }) => (isActive ? '#f5f4f5' : '#FFFFFF')};

  &:hover {
    color: #223bf2;
  }

  &:last-child {
    border-bottom: 0;
  }
`;
