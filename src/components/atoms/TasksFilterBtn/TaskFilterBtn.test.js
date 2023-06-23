import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskFilterBtn } from './TaskFilterBtn';
import '@testing-library/jest-dom';

describe('TaskFilterBtn', () => {
  test('renders button with correct className', () => {
    const { getByText } = render(
      <TaskFilterBtn onClick={() => {}} active={false}>
        Filter Button
      </TaskFilterBtn>
    );
    const buttonElement = getByText('Filter Button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('TaskFilterBtn');
  });

  test('renders active button with correct className', () => {
    const { getByText } = render(
      <TaskFilterBtn onClick={() => {}} active>
        Active Button
      </TaskFilterBtn>
    );
    const buttonElement = getByText('Active Button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('TaskFilterBtn Active');
  });

  test('calls onClick function when button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <TaskFilterBtn onClick={onClick} active={false}>
        Clickable Button
      </TaskFilterBtn>
    );
    const buttonElement = getByText('Clickable Button');

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
