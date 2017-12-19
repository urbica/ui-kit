/* eslint function-paren-newline: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Selector from '../Selector';
import Container from '../Selector/Container';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

const onChange = value => value;

test('Selector does not crash', () => {
  const tree = shallow(<Selector options={options} value={options[0].value} />);
  expect(toJson(tree)).toMatchSnapshot();
});

test('Selector test value', () => {
  const wrapper = mount(
    <Selector
      onChange={onChange}
      options={options}
      value={options[0].value}
    />);
  expect(wrapper.props().value).toEqual('one');
  wrapper.setProps({ value: 'two' });
  expect(wrapper.props().value).toEqual('two');
});

test('Selector with an empty array', () => {
  expect(() => mount(<Selector onChange={onChange} options={[]} />))
    .toThrowError('options is empty');
});

test('Selector simulate onClick', () => {
  const wrapper = shallow(
    <Selector
      onChange={onChange}
      options={options}
      value={options[0].value}
    />
  ).dive();
  const Button = wrapper.find(Container).first();
  expect(wrapper.state().isOpen).toEqual(false);
  Button.simulate('click');
  expect(wrapper.state().isOpen).toEqual(true);
});
