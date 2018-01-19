import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Item from './Item';

const List = ({ value, onChange, options }) => {
  if (!options.length) {
    throw new Error('options is empty');
  }

  return (
    <Container>
      {
        options.map(option => (
          <Item
            key={option.value}
            isActive={value === option.value}
            onClick={onChange.bind(null, option)}
          >
            {option.label}
          </Item>
        ))
      }
    </Container>
  );
};

List.propTypes = {
  value: PropTypes.node,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func
};

List.defaultProps = {
  value: null,
  options: [],
  onChange: () => {}
};

export default List;
