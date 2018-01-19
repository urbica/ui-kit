import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import YearPicker from '../YearPicker';

test('YearPicker does not crash', () => {
  const wrapper = shallow(<YearPicker value={2017} onChange={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('YearPicker change value', () => {
  const wrapper = mount(<YearPicker value={2017} onChange={() => {}} />);
  wrapper.setProps({ value: 2018 });
  expect(wrapper.props().value).toBe(2018);
});
