import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Slider from '../Slider';
import Input from '../InputRange/InputRange';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' }
];

const onChange = value => value;

test('Slider does not crash', () => {
  const wrapper = shallow(<Slider onChange={onChange} options={options} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('Slider with an empty array', () => {
  expect(() => shallow(<Slider onChange={onChange} options={[]} />))
    .toThrowError('options is empty');
});

test('Slider simulate onChange', () => {
  const wrapper = shallow(<Slider
    onChange={onChange}
    options={options}
    value={options[0].value}
  />);
  const rangeInput = wrapper.find(Input).first();
  expect(wrapper.state('index')).toEqual(0);
  rangeInput.simulate('change', { target: { value: 1 } });
  expect(wrapper.state('index')).toEqual(1);
});

test('Slider simulate onChangeEnd', () => {
  const wrapper = shallow(<Slider
    onChange={onChange}
    options={options}
    value={options[0].value}
  />);
  const rangeInput = wrapper.find(Input).first();
  expect(wrapper.state('index')).toEqual(0);
  rangeInput.simulate('change', { target: { value: 0.8 } });
  rangeInput.simulate('click', { target: { value: 0.8 } });
  expect(wrapper.state('index')).toEqual(1);
});

test('Slider simulate onClickScale', () => {
  const wrapper = shallow(<Slider
    onChange={onChange}
    options={options}
    value={options[0].value}
  />);
  const scaleButton = wrapper.find('[role="button"]').last();
  expect(wrapper.state('index')).toEqual(0);
  scaleButton.simulate('click');
  expect(wrapper.state('index')).toEqual(2);
});
