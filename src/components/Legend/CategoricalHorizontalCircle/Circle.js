import PropTypes from 'prop-types';
import styled from 'styled-components';

// calculate circle size
const size = (props) => {
  const {
    index, segmentsAmount, circleSize, proportional
  } = props;

  if (proportional) {
    const value = ((circleSize / segmentsAmount) * index) + circleSize;

    return value % 2 ? value + 1 : value;
  }

  return circleSize;
};

const Circle = styled.div`
  position: relative;
  flex: 1;
  height: 40px;
  box-sizing: border-box;
  
  &:after {
    position: absolute;
    height: ${size}px;
    width: ${size}px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    content: ' ';

    background-color: ${({ color }) => color};
  }
`;

Circle.propTypes = {
  index: PropTypes.number.isRequired,
  segmentsAmount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  circleSize: PropTypes.number,
  proportional: PropTypes.bool
};

export default Circle;
