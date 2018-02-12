/* eslint function-paren-newline: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Select from '../Select';

// import Dropdown from '../Dropdown';
// import Content from './Content';
// import Button from './Button';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
  { value: 'four', label: 'Four' }
];

test('Select does not crash', () => {
  const tree = shallow(<Select options={options} value={options[0].value} onChange={jest.fn()} />);
  expect(toJson(tree)).toMatchSnapshot();
});

// test('Select simulate click Dropdown', () => {
//   const wrapper = shallow(
//     <Select onChange={() => {}} options={options} value={options[0].value} />
//   );

//   const DropdownWrap = wrapper
//     .find(Dropdown)
//     .first()
//     .dive();

//   DropdownWrap.setState({ isOpen: true });
//   const conatiner = wrapper.find(Content).first();
//   conatiner.simulate('click', { stopPropagation: () => {} });
//   expect(DropdownWrap.state().isOpen).toEqual(true);
// });

// test('Select simulate click Button', () => {
//   const wrapper = shallow(
//     <Select onChange={() => {}} options={options} value={options[0].value} />
//   );

//   const DropdownWrap = wrapper
//     .find(Dropdown)
//     .first()
//     .dive();

//     const btn = DropdownWrap.find(Button)
//     .first()
//     .dive();

//     btn.setProps({ isOpen: true });
//   expect(toJson(wrapper)).toMatchSnapshot();
// });
