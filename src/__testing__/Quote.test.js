import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';
import '@testing-library/jest-dom';

test('expect component to match snapshot', () => {
  const quotes = renderer.create(<Quote />).toJSON();
  expect(quotes).toMatchSnapshot();
});
