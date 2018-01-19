import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from '../List';
import Item from './Item';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

const mockCallback = jest.fn();
const onChange = value => mockCallback(value);

test('List does not crash', () => {
  const tree = shallow(<List
    onChange={() => {}}
    options={options}
    value={options[0].value}
  />);
  expect(toJson(tree)).toMatchSnapshot();
});

test('List with an empty array', () => {
  expect(() => shallow(<List onChange={onChange} options={[]} />))
    .toThrowError('options is empty');
});

test('List simulate onClickItem', () => {
  const wrapper = shallow(<List
    onChange={onChange}
    options={options}
    value={options[0].value}
  />);
  const scaleButton = wrapper.find(Item).last();
  scaleButton.simulate('click');
  expect(mockCallback.mock.calls[0][0].value).toBe('four');
});

test('List change value', () => {
  const wrapper = mount(<List
    onChange={onChange}
    options={options}
    value={options[0].value}
  />);
  expect(wrapper.props().value).toBe('one');
  wrapper.setProps({ value: options[3].value });
  expect(wrapper.props().value).toBe('four');
});
