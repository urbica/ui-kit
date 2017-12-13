import styled from 'react-emotion';

export default styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  border: 1px solid #303d41;
  border-right: 0;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ active }) => (active ? '#303d41' : 'white')};
  color: ${({ active }) => (active ? '#f5f4f5' : '#303d41')};
  
  &:hover {
    cursor: pointer;
    background-color: ${({ active }) => (active ? '#303d41' : '#bfbfbf')};
  }

  &:last-child {
    border-right: 1px solid #303d41;
  }
`;
