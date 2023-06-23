import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  const onEnterPress = jest.fn();

  test('renders Header with correct title', () => {
    const { getByText } = render(<Header onSubmit={onEnterPress} />);

    const titleElement = getByText('TO DO');

    expect(titleElement).toBeInTheDocument();
  });

  test('calls onEnterPress with correct value when Enter key is pressed', () => {
    const { getByPlaceholderText } = render(<Header onSubmit={onEnterPress} />);

    const inputElement = getByPlaceholderText('Write new task and press Enter');

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.keyDown(inputElement, { key: 'Enter' });

    expect(onEnterPress).toHaveBeenCalledWith('New Task');
  });
});
