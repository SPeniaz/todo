import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<Button onClick={() => {}} id="123" btnText="✖" />);
    const deleteButton = getByRole('button');

    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveClass('Button');
    expect(deleteButton).toHaveTextContent('✖');
  });

  test('calls onDeleteClick when clicked', () => {
    const onDeleteClick = jest.fn();
    const { getByRole } = render(<Button onClick={onDeleteClick} id="123" />);
    const deleteButton = getByRole('button');

    fireEvent.click(deleteButton);

    expect(onDeleteClick).toHaveBeenCalledWith('123');
  });
});
