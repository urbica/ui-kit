import PropTypes from 'prop-types';
import styled from 'styled-components';

const Square = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${({ color }) => color};
`;

Square.propTypes = {
  color: PropTypes.string.isRequired
};

export default Square;
