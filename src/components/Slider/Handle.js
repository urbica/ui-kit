import styled from 'react-emotion';

export default styled.div`
  position: absolute;
  ${({ tooltipPosition }) => (tooltipPosition === 'bottom' ? 'bottom: -15px' : 'top: 0px')};
  left: ${({ position }) => position}%;

  text-align: center;

  transform: translateX(${({ position }) => -position}%);
`;
