import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Value = styled.div`
  flex: ${({ width }) => width}%;
  left: -50%;
  font-size: 12px;
  color: #263238;
  padding-top: 5px;

  text-align: center;

  transform: translateX(-50%);
`;

Value.propTypes = {
  width: PropTypes.number.isRequired
};

export default Value;
