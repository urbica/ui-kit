import styled from 'styled-components';
import PropTypes from 'prop-types';

import defaultTheme from './defaultTheme.json';

const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 0;
  border-width: ${({ theme }) => theme.button_borderWidth};
  border-style: solid;
  border-color: ${({ theme }) => theme.button_borderColor};
  border-image: ${({ theme }) => theme.button_borderImage};

  color: ${({ theme }) => theme.button_color};

  background-color: ${({ theme }) => theme.button_backgroundColor};
  background-image: ${({ theme }) => theme.button_backgroundImage};

  &:hover {
    cursor: pointer;
  }
`;

Button.propTypes = {
  theme: PropTypes.shape({
    button_borderWidth: PropTypes.string,
    button_borderColor: PropTypes.string,
    button_borderImage: PropTypes.string,
    button_color: PropTypes.string,
    button_backgroundColor: PropTypes.string,
    button_backgroundImage: PropTypes.string
  })
};

Button.defaultProps = {
  theme: defaultTheme
};

/**
 * @component
 */
export default Button;
