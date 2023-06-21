import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckBox } from './CheckBox'
import '@testing-library/jest-dom';

describe('TaskCompletedCheckBox', () => {
  test('renders correctly', () => {
    const { getByRole } = render(<CheckBox checked={false} onChange={() => {}} />);
    const checkbox = getByRole('checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass('CheckBox');
    expect(checkbox.checked).toBe(false);
  });

  test('calls onCheck with correct value when checked', () => {
    const onCheck = jest.fn();
    const { getByRole } = render(<CheckBox checked={false} onChange={onCheck} />);
    const checkbox = getByRole('checkbox');

    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  test('calls onCheck with correct value when unchecked', () => {
    const onCheck = jest.fn();
    const { getByRole } = render(<CheckBox checked onChange={onCheck} />);
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onCheck).toHaveBeenCalledWith(false);
  });
});
