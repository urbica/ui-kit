import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Button from '../Button';

const RadioButton = styled(Button)`
  background-color: ${({ active }) => (active ? '#303d41' : 'white')};
  color: ${({ active }) => (active ? '#f5f4f5' : '#303d41')};

  &:hover {
    background-color: ${({ active }) => (active ? '#303d41' : '#bfbfbf')};
  }
`;

RadioButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired
};

/**
 * @component
 */
export default RadioButton;
