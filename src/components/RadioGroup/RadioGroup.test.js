/* eslint function-paren-newline: 0 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import RadioGroup from './';
import Button from '../Button';

const onChange = value => value;

test('RadioGroup does not crash', () => {
  const tree = shallow(
    <RadioGroup
      onChange={onChange}
      value={1}
    >
      <Button value={1}>Option 1</Button>
      <Button value={2}>Option 2</Button>
    </RadioGroup>);
  expect(toJson(tree)).toMatchSnapshot();
});

test('RadioGroup test value', () => {
  const wrapper = mount(
    <RadioGroup
      onChange={onChange}
      value={1}
    >
      <Button value={1}>Option 1</Button>
      <Button value={2}>Option 2</Button>
    </RadioGroup>);
  expect(wrapper.props().value).toEqual(1);
  wrapper.setProps({ value: 2 });
  expect(wrapper.props().value).toEqual(2);
});
