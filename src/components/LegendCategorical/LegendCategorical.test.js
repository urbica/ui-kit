import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LegendCategorical from './';

const values = [
  { id: 1, color: '#111111', title: 0 },
  { id: 2, color: '#333333', title: 100 },
  { id: 3, color: '#666666', title: 300 },
  { id: 4, color: '#999999', title: 600 },
  { id: 5, color: '#AAAAAA', title: 900 }
];

test('Legend does not crash', () => {
  const tree = shallow(<LegendCategorical values={values} />);
  expect(toJson(tree)).toMatchSnapshot();
});

test('Legend got an empty array', () => {
  const tree = shallow(<LegendCategorical values={[]} />);
  expect(toJson(tree)).toMatchSnapshot();
});
