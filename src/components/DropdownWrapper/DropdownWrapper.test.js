/* eslint function-paren-newline: 0 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import simulant from 'simulant';
import toJson from 'enzyme-to-json';
import DropdownWrapper from '../DropdownWrapper';
import Button from '../Button/Button';


test('DropdownWrapper does not crash', () => {
  const tree = shallow(
    <DropdownWrapper opener={toggle => (<Button onClick={toggle}>Button</Button>)}>
      children
    </DropdownWrapper>
  );
  expect(toJson(tree)).toMatchSnapshot();
});

test('DropdownWrapper test setChildNodeRef', () => {
  mount(
    <DropdownWrapper opener={toggle => (<Button onClick={toggle}>Button</Button>)}>
      children
    </DropdownWrapper>
  );
});

test('DropdownWrapper simulate opener onClick', () => {
  const wrapper = shallow(
    <DropdownWrapper
      opener={toggle => (<Button onClick={toggle}>Button</Button>)}
    >
      children
    </DropdownWrapper>
  );

  const btn = wrapper.find(Button).first();
  expect(wrapper.state().isOpen).toEqual(false);
  btn.simulate('click');
  expect(wrapper.state().isOpen).toEqual(true);
});

test('click outside of component', () => {
  const wrapper = shallow(
    <DropdownWrapper
      opener={toggle => (<Button onClick={toggle}>Button</Button>)}
    >
      children
    </DropdownWrapper>
  );
  const btn = wrapper.find(Button).first();
  expect(wrapper.state().isOpen).toEqual(false);
  btn.simulate('click');
  expect(wrapper.state().isOpen).toEqual(true);
  simulant.fire(document, 'click');
  expect(wrapper.state().isOpen).toEqual(false);
});
