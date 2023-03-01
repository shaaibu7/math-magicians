import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

test('testing for snapshot of calculator component', () => {
  const calculator = renderer.create(<Calculator />).toJSON();
  expect(calculator).toMatchSnapshot();
});

test('render the AC button in the UI', () => {
  render(<Calculator />);
  const btnAc = screen.getByText(/AC/i);
  expect(btnAc).toBeInTheDocument();
});

test('render the + button in the UI', () => {
  render(<Calculator />);
  const btnPlus = screen.getByText('+');
  expect(btnPlus).toBeInTheDocument();
});

test('render the - button in the UI', () => {
  render(<Calculator />);
  const btnMinus = screen.getByText('-');
  expect(btnMinus).toBeInTheDocument();
});

test('render the % button in the UI', () => {
  render(<Calculator />);
  const btnPercentage = screen.getByText('%');
  expect(btnPercentage).toBeInTheDocument();
});

test('render the ÷ button in the UI', () => {
  render(<Calculator />);
  const btnDivide = screen.getByText('÷');
  expect(btnDivide).toBeInTheDocument();
});

test('render the = button in the UI', () => {
  render(<Calculator />);
  const btnEqualTo = screen.getByText('=');
  expect(btnEqualTo).toBeInTheDocument();
});
