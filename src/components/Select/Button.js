import styled from 'react-emotion';
import PropTypes from 'prop-types';

const borderColor = props => (props.isOpen ?
  'transparent transparent #000000 transparent' :
  '#000000 transparent transparent transparent');

const borderWidth = props => (props.isOpen ?
  '0 5px 10px 5px' :
  '10px 5px 0 5px');

const Button = styled.div`
  position: relative;
  padding: 20px;
  user-select: none;
  width: 100%;
  box-sizing: border-box;
  
  &:after {
    top: 23px;
    right: 20px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${borderWidth};
    border-color: ${borderColor};
    opacity: ${props => (props.isOpen ? 1 : 0.2)};
    content: '';
    position: absolute;
  }
  
  &:hover {
    cursor: pointer;
    background-color: #faf9fa;

    &:after {
      opacity: 1;
    }
  }
`;

Button.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default Button;
