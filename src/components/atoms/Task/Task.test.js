import React from 'react';
import { render } from '@testing-library/react';
import { Task } from './Task';
import '@testing-library/jest-dom';

describe('Task', () => {
  test('renders description correctly', () => {
    const description = 'Sample Task';
    const { getByText } = render(<Task description={description} completed={false} />);
    const taskElement = getByText(description);

    expect(taskElement).toBeInTheDocument();
    expect(taskElement).toHaveTextContent(description);
  });

  test('applies "TaskInActive" class when completed is true', () => {
    const description = 'Sample Task';
    const { container } = render(<Task description={description} completed />);
    const taskElement = container.firstChild;

    expect(taskElement).toHaveClass('Task');
    expect(taskElement).toHaveClass('TaskInActive');
  });

  test('does not apply "TaskInActive" class when completed is false', () => {
    const description = 'Sample Task';
    const { container } = render(<Task description={description} completed={false} />);
    const taskElement = container.firstChild;

    expect(taskElement).toHaveClass('Task');
    expect(taskElement).not.toHaveClass('TaskInActive');
  });
});