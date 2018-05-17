import PropTypes from 'prop-types';
import styled from 'styled-components';

const Segment = styled.div`
  flex: 1;
  height: 15px;
  background-color: ${({ color }) => color};
`;

Segment.propTypes = {
  color: PropTypes.string.isRequired
};

export default Segment;
