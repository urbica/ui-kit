import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Slider from '../Slider';

const options = [
  { name: '1990', value: [] }, { name: '2000', value: [] }, { name: '2010', value: [] }
];
const onChange = value => value;

test('Button does not crash', () => {
  const tree = shallow(<Slider onChange={onChange} options={options} />);
  expect(toJson(tree)).toMatchSnapshot();
});
