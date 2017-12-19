import React from 'react';
import Container from './Container';
import Item from './Item';

const MenuOuter = () => (
  <Container onClick={e => e.stopPropagation()}>
    <Item>
      123
    </Item>
    <Item>
      234
    </Item>
    <Item>
      345
    </Item>
  </Container>
);

export default MenuOuter;
