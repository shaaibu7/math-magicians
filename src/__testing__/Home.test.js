import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import '@testing-library/jest-dom';

test('testing for header text', () => {
  render(<Home />);
  const headerText = screen.getAllByText(/Welcome to our page!/i);
  expect(headerText).toMatchSnapshot();
});

test('test for content in the Home component', () => {
  const content = renderer.create(<Home />).toJSON();
  expect(content).toMatchSnapshot();
});
