import styled from 'react-emotion';

const Item = styled.li`
  display: flex;
  list-style-type: none;
  height: 50px;
  border-bottom: 1px solid gray;
  padding: 10px;
  box-sizing: border-box;
  align-items: center;
  user-select: none;

  &:hover {
    color: #223bf2;
    cursor: pointer;
  }

  &:last-child {
    border-bottom: 0;
  }
`;

export default Item;
