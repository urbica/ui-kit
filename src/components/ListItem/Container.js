import styled from 'react-emotion';

export default styled.div`
  padding: 20px;
  background-color: ${({ isActive }) => (isActive ? '#f5f4f5' : '#ffffff')};
  border-bottom: 1px solid #ecf1f8;
`;
