import styled from 'react-emotion';

export default styled.div`
  font-size: 16px;
  margin: 5px 0;
  color: ${({ isActive }) => (isActive ? '#000000' : 'inherit')};
`;
