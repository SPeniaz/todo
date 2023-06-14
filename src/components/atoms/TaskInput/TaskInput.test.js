import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskInput } from './TaskInput';
import '@testing-library/jest-dom';

describe('TaskInput', () => {
  test('renders input with correct placeholder', () => {
  const { getByPlaceholderText } = render(<TaskInput onEnterPress={() => {}} />);
  const inputElement = getByPlaceholderText('Write new task and press Enter');
  
      expect(inputElement).toBeInTheDocument();
    });
  
  test('renders input with correct className', () => {
    const { getByPlaceholderText } = render(<TaskInput onEnterPress={() => {}} />);
    const inputElement = getByPlaceholderText('Write new task and press Enter');
  
    expect(inputElement).toHaveClass('TaskInput');
  });

  test('calls onEnterPress with correct value when Enter key is pressed', () => {
    const onEnterPress = jest.fn();
    const { getByPlaceholderText } = render(<TaskInput onEnterPress={onEnterPress} />);
    const inputElement = getByPlaceholderText('Write new task and press Enter');
    const inputValue = 'New Task';

    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 13 });

    expect(onEnterPress).toHaveBeenCalledWith(inputValue);
    expect(inputElement.value).toBe('');
  });

  test('does not call onEnterPress when Enter key is pressed without a value', () => {
    const onEnterPress = jest.fn();
    const { getByPlaceholderText } = render(<TaskInput onEnterPress={onEnterPress} />);
    const inputElement = getByPlaceholderText('Write new task and press Enter');

    fireEvent.keyDown(inputElement, { key: 'Enter', code: 13 });

    expect(onEnterPress).not.toHaveBeenCalled();
  });
});