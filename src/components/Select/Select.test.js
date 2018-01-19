/* eslint function-paren-newline: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Select from '../Select';
import DropdownWrapper from '../DropdownWrapper';
import Dropdown from './Dropdown';
import Button from './Button';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

test('Select does not crash', () => {
  const tree = shallow(<Select options={options} value={options[0].value} />);
  expect(toJson(tree)).toMatchSnapshot();
});

test('Select with an empty array', () => {
  expect(() => shallow(<Select options={[]} />))
    .toThrowError('options is empty');
});

test('Select simulate click Dropdown', () => {
  const wrapper = shallow(
    <Select
      onChange={() => {}}
      options={options}
      value={options[0].value}
    />
  );

  const DropdownWrap = wrapper.find(DropdownWrapper).first().dive();
  DropdownWrap.setState({ isOpen: true });
  const conatiner = wrapper.find(Dropdown).first();
  conatiner.simulate('click', { stopPropagation: () => {} });
  expect(DropdownWrap.state().isOpen).toEqual(true);
});

test('Select simulate click Button', () => {
  const wrapper = shallow(
    <Select
      onChange={() => {}}
      options={options}
      value={options[0].value}
    />
  );

  const DropdownWrap = wrapper.find(DropdownWrapper).first().dive();
  const btn = DropdownWrap.find(Button).first().dive();
  btn.setProps({ isOpen: true });
});
