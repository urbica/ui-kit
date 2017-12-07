import styled from 'react-emotion';

export default styled.div`
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'inherit')};
  margin: 5px 0;
  color: ${({ isActive }) => (isActive ? '#303d41' : 'inherit')};
`;
