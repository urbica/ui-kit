import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import LegendInterval from './';

const values = [
  { id: 1, color: '#111111', label: 0 },
  { id: 2, color: '#333333', label: 100 },
  { id: 3, color: '#666666', label: 300 },
  { id: 4, color: '#999999', label: 600 },
  { id: 5, color: '#AAAAAA', label: 900 }
];

const valuesNewColors = [
  { id: 1, color: 'red', label: 0 },
  { id: 2, color: 'green', label: 100 },
  { id: 3, color: 'black', label: 300 },
  { id: 4, color: '#999999', label: 600 },
  { id: 5, color: '#AAAAAA', label: 900 }
];

test('Legend does not crash', () => {
  const tree = shallow(<LegendInterval values={values} lastItem={1200} />);
  expect(toJson(tree)).toMatchSnapshot();
});

test('Legend with an empty array', () => {
  expect(() => shallow(<LegendInterval values={[]} />))
    .toThrowError('values is empty');
});

test('Legend with an change color', () => {
  const wrapper = mount(<LegendInterval values={values} />);
  expect(wrapper.props().values).toEqual(values);
  wrapper.setProps({ values: valuesNewColors });
  expect(wrapper.props().values).toEqual(valuesNewColors);
});