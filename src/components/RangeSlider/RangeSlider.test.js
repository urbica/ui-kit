import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import RangeSlider from './';
import Input from '../InputRange/InputRange';

const onChange = value => value;
const leftValue = 0;
const rightValue = 100;

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];


test('RangeSlider does not crash', () => {
  const wrapper = shallow(<RangeSlider />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('RangeSlider with an empty array', () => {
  expect(() => shallow(<RangeSlider onChange={onChange} options={[]} />))
    .toThrowError('options is empty');
});

test('RangeSlider line test', () => {
  const wrapper = mount(<RangeSlider
    options={options}
    leftValue={20}
    rightValue={80}
  />);
  expect(wrapper.props().leftValue).toEqual(20);
  wrapper.setProps({ leftValue: 40 });
  expect(wrapper.props().leftValue).toEqual(40);
});

test('RangeSlider render witch options', () => {
  const wrapper = shallow(<RangeSlider
    options={options}
    leftValue={options[1]}
    rightValue={options[2]}
  />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('RangeSlider simulate onChange', () => {
  const wrapper = shallow(<RangeSlider
    onChange={onChange}
    leftValue={leftValue}
    rightValue={rightValue}
  />);
  const rangeInputFirst = wrapper.find(Input).first();
  const rangeInputLast = wrapper.find(Input).last();
  expect(wrapper.state('leftValue')).toEqual(0);
  rangeInputFirst.simulate('change', { target: { value: 10 } });
  expect(wrapper.state('leftValue')).toEqual(10);
  rangeInputLast.simulate('change', { target: { value: 80 } });
  expect(wrapper.state('rightValue')).toEqual(80);
});

test('RangeSlider simulate onChangeEnd', () => {
  const wrapper = shallow(<RangeSlider
    onChange={onChange}
    leftValue={leftValue}
    rightValue={rightValue}
  />);
  const rangeInput = wrapper.find(Input).first();
  expect(wrapper.state('leftValue')).toEqual(0);
  rangeInput.simulate('change', { target: { value: 10.8 } });
  rangeInput.simulate('click', { target: { value: 10.8 } });
  expect(wrapper.state('leftValue')).toEqual(11);
});
