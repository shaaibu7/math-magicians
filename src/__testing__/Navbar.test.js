import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navigation from '../components/Home';
import '@testing-library/jest-dom';

test('testing for all element in the navbar', () => {
  render(<Navigation />);
  const NavigationLinks = screen.getByRole('heading');
  expect(NavigationLinks).toBeInTheDocument();
});

test('expects Navbar to be in home componenet', () => {
  const navigation = renderer.create(<Navigation />).toJSON();
  expect(navigation).toMatchSnapshot();
});
