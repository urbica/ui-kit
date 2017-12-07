import styled from 'react-emotion';

const hover = `
  &:hover {
    color: #223bf2;
    background-color: #faf9fa;
  }
`;

export default styled.div`
  padding: 15px 20px;
  background-color: ${({ isActive }) => (isActive ? '#f5f4f5' : '#ffffff')};
  border-bottom: 1px solid #ecf1f8;
  cursor: pointer;
  transition: 0.5s;

  ${({ isActive }) => (!isActive && hover)};
`;
