import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListItem from '../ListItem';

test('ListItem does not crash', () => {
  const tree = shallow(<ListItem
    title="test"
    description="test"
    onClick={() => {}}
  />);
  expect(toJson(tree)).toMatchSnapshot();
});

test('ListItem test isActive', () => {
  const wrapper = mount(<ListItem
    title="test"
    description="test"
    onClick={() => {}}
    isActive={false}
  />);
  expect(wrapper.props().isActive).toEqual(false);
  wrapper.setProps({ isActive: true });
  expect(wrapper.props().isActive).toEqual(true);
});
