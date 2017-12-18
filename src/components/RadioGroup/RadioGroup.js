import PropTypes from 'prop-types';
import React, { Children, createElement } from 'react';

// Style
import Container from './Container';

/**
 * @component
 */

const RadioGroup = ({ value, onChange, children }) => (
  <Container>
    {
      Children.map(children, ({ type, props }) =>
        createElement(type, {
          active: props.value === value,
          onClick: onChange.bind(null, props.value),
          ...props
        }))
    }
  </Container>
);

RadioGroup.propTypes = {
  value: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default RadioGroup;
