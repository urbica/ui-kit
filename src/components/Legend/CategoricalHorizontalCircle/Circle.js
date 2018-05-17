import PropTypes from 'prop-types';
import styled from 'styled-components';

const size = ({ number, length }) => {
  const value = ((20 / length) * number) + 20;
  return value % 2 ? value + 1 : value;
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
  number: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Circle;
