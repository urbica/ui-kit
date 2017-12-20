/* eslint function-paren-newline: 0 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Selector from '../Selector';
import Container from '../Selector/Container';
import MenuOuter from '../Selector/MenuOuter/MenuOuter';
import MenuOuterContainer from '../Selector/MenuOuter/Container';
import Item from '../Selector/MenuOuter/Item';

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

test('Selector with an empty array', () => {
  expect(() => shallow(<Selector options={[]} />).dive())
    .toThrowError('options is empty');
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

test('Selector simulate onClick', () => {
  const wrapper = shallow(
    <Selector
      onChange={onChange}
      options={options}
      value={options[0].value}
    />
  ).dive();
  const btn = wrapper.find(Container).first();
  expect(wrapper.state().isOpen).toEqual(false);
  btn.simulate('click');
  expect(wrapper.state().isOpen).toEqual(true);
});

test('Selector simulate change value', () => {
  const wrapper = shallow(
    <Selector
      onChange={onChange}
      options={options}
      value={options[0].value}
    />
  );
  expect(wrapper.props().value).toEqual(options[0].value);
  wrapper.setProps({ value: options[1].value });
  expect(wrapper.props().value).toEqual(options[1].value);
});

test('Selector simulate Item onClick', () => {
  const wrapper = shallow(
    <Selector
      onChange={onChange}
      options={options}
      value={options[0].value}
    />
  ).dive();
  wrapper.setState({ isOpen: true });
  const menuOuter = wrapper.find(MenuOuter).first();
  const itemLast = menuOuter.dive().find(Item).last();
  itemLast.simulate('click');
  expect(wrapper.state().value).toEqual(options[3].value);
});

test('Selector simulate click MenuOuter', () => {
  const wrapper = shallow(
    <Selector
      onChange={onChange}
      options={options}
      value={options[0].value}
    />
  ).dive();
  wrapper.setState({ isOpen: true });
  const menuOuter = wrapper.find(MenuOuter).first();
  const container = menuOuter.dive().find(MenuOuterContainer).first();
  container.simulate('click', { stopPropagation: () => {} });
  expect(wrapper.state().value).toEqual(options[0].value);
});
