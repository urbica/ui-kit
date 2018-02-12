import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from '../List';
import Item from './Item';

const items = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

const mockCallback = jest.fn();
const onClick = value => mockCallback(value);

test('List does not crash', () => {
  const tree = shallow(<List onClick={() => {}} items={items} value={items[0].value} />);
  expect(toJson(tree)).toMatchSnapshot();
});

test('List simulate onClickItem', () => {
  const wrapper = shallow(<List onClick={onClick} items={items} value={items[0].value} />);
  const scaleButton = wrapper.find(Item).last();
  scaleButton.simulate('click');
  expect(mockCallback.mock.calls[0][0].value).toBe('four');
});

test('List change value', () => {
  const wrapper = mount(<List onClick={onClick} items={items} value={items[0].value} />);
  expect(wrapper.props().value).toBe('one');
  wrapper.setProps({ value: items[3].value });
  expect(wrapper.props().value).toBe('four');
});
