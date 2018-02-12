/* eslint function-paren-newline: 0 */

import React from 'react';
import { shallow } from 'enzyme';
// import simulant from 'simulant';
import toJson from 'enzyme-to-json';
import Dropdown from '../Dropdown';
import Button from '../Button/Button';

test('Dropdown does not crash', () => {
  const tree = shallow(
    <Dropdown
      renderHandler={({ toggle }) => <Button onClick={toggle}>Button</Button>}
      renderContent={() => 'Children'}
    />
  );

  expect(toJson(tree)).toMatchSnapshot();
});

// test('Dropdown test setChildNodeRef', () => {
//   mount(
//     <Dropdown
//       renderHandler={({ toggle }) => <Button onClick={toggle}>Button</Button>}
//       renderContent={() => 'Children'}
//     />
//   );
// });

// test('Dropdown simulate renderHandler onClick', () => {
//   const wrapper = shallow(
//     <Dropdown
//       renderHandler={toggle => <Button onClick={toggle}>Button</Button>}
//       renderContent={() => 'Children'}
//     />
//   );

//   const btn = wrapper.find(Button).first();
//   expect(wrapper.state().isOpen).toEqual(false);
//   btn.simulate('click');
//   expect(wrapper.state().isOpen).toEqual(true);
// });

// test('click outside of component', () => {
//   const wrapper = shallow(
//     <Dropdown
//       renderHandler={toggle => <Button onClick={toggle}>Button</Button>}
//       renderContent={() => 'Children'}
//     />
//   );
//   const btn = wrapper.find(Button).first();
//   expect(wrapper.state().isOpen).toEqual(false);

//   btn.simulate('click');
//   expect(wrapper.state().isOpen).toEqual(true);

//   simulant.fire(document, 'click');
//   expect(wrapper.state().isOpen).toEqual(false);
// });
