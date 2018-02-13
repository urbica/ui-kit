import styled from 'react-emotion';

export default styled.div`
  position: absolute;
  ${({ tooltipPosition }) => (tooltipPosition === 'bottom' ? 'bottom: -15px' : 'top: 0px')};
  left: ${({ position }) => position}%;
  width: 28px;
  height: 28px;

  text-align: center;

  transform: translateX(${({ position }) => ((position / 100) * -28)}px);
`;
