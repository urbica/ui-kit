import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Segment = styled.div`
  flex: ${({ width }) => width}%;
  height: 15px;
  background-color: ${({ color }) => color};
`;

Segment.propTypes = {
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Segment;
