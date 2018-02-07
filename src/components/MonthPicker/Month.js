import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Month = styled.div`
  width: calc((100% / 3) - 20px);
  text-align: center;
  padding: 5px;
  margin: 5px;
  background-color: ${props => (props.isActive ? '#f5f4f5' : '#ffffff')};
  color: ${props => (props.isDisabled ? '#90a4ae' : '#263238')};
  pointer-events: ${props => (props.isDisabled ? 'none' : 'auto')};
  
  
  &:hover {
    cursor: pointer;
    color: #223bf2;
  }
`;

Month.propTypes = {
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool
};

export default Month;
