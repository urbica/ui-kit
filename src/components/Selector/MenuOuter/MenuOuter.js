import React from 'react';
import Container from './Container';
import Item from './Item';

const MenuOuter = (props) => {
  const { value, handleOnClick, options } = props;

  return (
    <Container onClick={e => e.stopPropagation()}>
      {
        options.map((option) => {
          const isActive = value === option.value;
          return (
            <Item
              key={option.value}
              style={{ background: isActive ? '#f5f4f5' : '#FFFFFF' }}
              onClick={handleOnClick.bind(null, option.value)}
            >
              {option.label}
            </Item>
          );
        })
      }
    </Container>
  );
};

export default MenuOuter;
