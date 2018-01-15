import React from 'react';
import Container from './Container';
import Item from './Item';

const List = ({ currentValue, onChange, options }) => (
  <Container onClick={e => e.stopPropagation()}>
    {
      options.map((option) => {
        const isActive = currentValue === option.value;

        return (
          <Item
            key={option.value}
            style={{ background: isActive ? '#f5f4f5' : '#FFFFFF' }}
            onClick={onChange.bind(null, option.value)}
          >
            {option.label}
          </Item>
        );
      })
    }
  </Container>
);

export default List;
