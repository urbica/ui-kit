import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DataSelector from '../DataSelector';

test('DataSelector does not crash', () => {
  const tree = shallow(<DataSelector onChange={() => {}} />);
  expect(toJson(tree)).toMatchSnapshot();
});
