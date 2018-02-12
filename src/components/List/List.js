import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import Item from './Item';

const List = ({ items, onClick }) => (
  <Container>
    {items.map(item => (
      <Item
        key={item.value}
        highlight={item.highlight}
        onClick={onClick && onClick.bind(null, item)}
      >
        {item.label}
      </Item>
    ))}
  </Container>
);

List.propTypes = {
  onClick: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
    highlight: PropTypes.bool
  })).isRequired
};

List.defaultProps = {
  onClick: null
};

export default List;
