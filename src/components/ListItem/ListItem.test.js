import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListItem from '../ListItem';

test('ListItem does not crash', () => {
  const tree = shallow(<ListItem>title</ListItem>);
  expect(toJson(tree)).toMatchSnapshot();
});
