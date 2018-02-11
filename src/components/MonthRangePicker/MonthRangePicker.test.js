import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import MonthPicker from '../MonthPicker';


test('MonthPicker does not crash', () => {
  const wrapper = shallow(<MonthPicker value={0} onChange={() => {}} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('MonthPicker change value', () => {
  const wrapper = mount(<MonthPicker value={0} onChange={() => {}} />);
  wrapper.setProps({ value: 2 });
  expect(wrapper.props().value).toBe(2);
});

test('MonthPicker disabled', () => {
  const wrapper = shallow(<MonthPicker value={0} onChange={() => {}} />);
  wrapper.setProps({ disabled: month => month === 3 });
  expect(toJson(wrapper)).toMatchSnapshot();
});
