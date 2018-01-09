import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RadioButton from '../RadioButton';

test('RadioButton does not crash', () => {
  const tree = shallow(<RadioButton value>title</RadioButton>);
  expect(toJson(tree)).toMatchSnapshot();
});
