import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskDeleteButton from './TaskDeleteBtn'
import '@testing-library/jest-dom';

describe('TaskDeleteButton', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<TaskDeleteButton onDeleteClick={() => {}} taskId="123" />);
    const deleteButton = getByRole('button');

    expect(deleteButton).toBeInTheDocument();
    expect(deleteButton).toHaveClass('TaskDeleteBtn');
    expect(deleteButton).toHaveTextContent('✖');
  });

  test('calls onDeleteClick when clicked', () => {
    const onDeleteClick = jest.fn();
    const { getByRole } = render(<TaskDeleteButton onDeleteClick={onDeleteClick} taskId="123" />);
    const deleteButton = getByRole('button');

    fireEvent.click(deleteButton);

    expect(onDeleteClick).toHaveBeenCalledWith('123');
  });
});