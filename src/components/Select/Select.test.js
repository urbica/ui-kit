import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '../Button';

test('Button does not crash', () => {
  const tree = shallow(<Button>title</Button>);
  expect(toJson(tree)).toMatchSnapshot();
});
