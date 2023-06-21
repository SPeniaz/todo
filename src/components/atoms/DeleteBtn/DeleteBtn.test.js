import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DeleteButton from './DeleteBtn'
import '@testing-library/jest-dom';

describe('TaskDeleteButton', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<DeleteButton onClick={() => {}} id="123" />);
    const deleteButton = getByRole('button');

    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveClass('DeleteBtn');
    expect(deleteButton).toHaveTextContent('✖');
  });

  test('calls onDeleteClick when clicked', () => {
    const onDeleteClick = jest.fn();
    const { getByRole } = render(<DeleteButton onClick={onDeleteClick} id="123" />);
    const deleteButton = getByRole('button');

    fireEvent.click(deleteButton);

    expect(onDeleteClick).toHaveBeenCalledWith('123');
  });
});