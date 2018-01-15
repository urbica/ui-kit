import styled from 'react-emotion';

export default styled.div`
  position: absolute;
  bottom: -15px;
  left: ${({ position }) => position}%;

  width: 28px;

  transform: translateX(${({ position }) => ((position / 100) * -28)}px);
`;
