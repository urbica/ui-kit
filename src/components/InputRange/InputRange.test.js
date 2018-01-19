import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import InputRange from '../InputRange';

const onChange = value => value;

test('Slider does not crash', () => {
  const wrapper = shallow(<InputRange onChange={onChange} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
