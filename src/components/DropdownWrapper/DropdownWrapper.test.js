/* eslint function-paren-newline: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DropdownWrapper from '../DropdownWrapper';
import Button from '../Button/Button';


test('Select does not crash', () => {
  const tree = shallow(
    <DropdownWrapper opener={value => <div>{value}</div>}>
      children
    </DropdownWrapper>
  );
  expect(toJson(tree)).toMatchSnapshot();
});

test('Select simulate opener onClick', () => {
  const wrapper = shallow(
    <DropdownWrapper
      opener={toogle => (<Button onClick={toogle}>Button</Button>)}
    >
      children
    </DropdownWrapper>
  );

  const btn = wrapper.find(Button).first();
  expect(wrapper.state().isOpen).toEqual(false);
  btn.simulate('click');
  expect(wrapper.state().isOpen).toEqual(true);
});
