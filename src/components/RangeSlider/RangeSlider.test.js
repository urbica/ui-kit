import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DoubleRangeSlider from './';
import Input from '../InputRange/InputRange';

const onChange = value => value;
const value = {
  min: 0,
  max: 100
};

test('RangeSlider does not crash', () => {
  const wrapper = shallow(<DoubleRangeSlider onChange={onChange} value={value} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('RangeSlider simulate onChange', () => {
  const wrapper = shallow(<DoubleRangeSlider
    onChange={onChange}
    value={value}
  />);
  const rangeInputFirst = wrapper.find(Input).first();
  const rangeInputLast = wrapper.find(Input).last();
  expect(wrapper.state('minValue')).toEqual(0);
  rangeInputFirst.simulate('change', { target: { value: 10 } });
  expect(wrapper.state('minValue')).toEqual(10);
  rangeInputLast.simulate('change', { target: { value: 80 } });
  expect(wrapper.state('maxValue')).toEqual(80);
});

test('RangeSlider simulate onChangeEnd', () => {
  const wrapper = shallow(<DoubleRangeSlider
    onChange={onChange}
    value={value}
  />);
  const rangeInput = wrapper.find(Input).first();
  expect(wrapper.state('minValue')).toEqual(0);
  rangeInput.simulate('change', { target: { value: 10.8 } });
  rangeInput.simulate('click', { target: { value: 10.8 } });
  expect(wrapper.state('minValue')).toEqual(11);
});
