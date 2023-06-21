import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TextInput } from './TextInput';
import '@testing-library/jest-dom';

describe('TextInput', () => {
  test('renders input with correct placeholder', () => {
    const placeholder = "Write new task and press Enter";
    const { getByPlaceholderText } = render(<TextInput onSubmit={() => {}} placeholder={placeholder} />);
    const inputElement = getByPlaceholderText(placeholder);
  
    expect(inputElement).toBeInTheDocument();
  });

  test('renders input without providing placeholder', () => {
    const placeholder = "Enter data";
    const { getByPlaceholderText } = render(<TextInput onSubmit={() => {}} />);
    const inputElement = getByPlaceholderText(placeholder);
  
    expect(inputElement).toBeInTheDocument();
  });
  
  test('renders input with correct className', () => {
    const placeholder = "Write new task and press Enter";
    const { getByPlaceholderText } = render(<TextInput onSubmit={() => {}} placeholder={placeholder}/>);
    const inputElement = getByPlaceholderText(placeholder);
  
    expect(inputElement).toHaveClass('TextInput');
  });

  test('calls onEnterPress with correct value when Enter key is pressed', () => {
    const onEnterPress = jest.fn();
    const placeholder = "Write new task and press Enter";
    const { getByPlaceholderText } = render(<TextInput onSubmit={onEnterPress} placeholder={placeholder}/>);
    const inputElement = getByPlaceholderText(placeholder);
    const inputValue = 'New Task';

    fireEvent.change(inputElement, { target: { value: inputValue } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 13 });

    expect(onEnterPress).toHaveBeenCalledWith(inputValue);
    expect(inputElement.value).toBe('');
  });

  test('does not call onEnterPress when Enter key is pressed without a value', () => {
    const onEnterPress = jest.fn();
    const placeholder = "Write new task and press Enter";
    const { getByPlaceholderText } = render(<TextInput onSubmit={onEnterPress} placeholder={placeholder}/>);
    const inputElement = getByPlaceholderText('Write new task and press Enter');

    fireEvent.keyDown(inputElement, { key: 'Enter', code: 13 });

    expect(onEnterPress).not.toHaveBeenCalled();
  });
});