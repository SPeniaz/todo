import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskCompletedCheckBox } from './TaskCompletedCheckBox';
import '@testing-library/jest-dom';

describe('TaskCompletedCheckBox', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<TaskCompletedCheckBox checked={false} onCheck={() => {}} />);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('TaskCompletedCheckBox');
    expect(checkbox.checked).toBe(false);
  });

  test('calls onCheck with correct value when checked', () => {
    const onCheck = jest.fn();
    const { getByRole } = render(<TaskCompletedCheckBox checked={false} onCheck={onCheck} />);
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  test('calls onCheck with correct value when unchecked', () => {
    const onCheck = jest.fn();
    const { getByRole } = render(<TaskCompletedCheckBox checked onCheck={onCheck} />);
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onCheck).toHaveBeenCalledWith(false);
  });
});
