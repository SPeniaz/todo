import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TaskItem } from './TaskItem';
import '@testing-library/jest-dom';

describe('TaskItem', () => {
  const task = {
    id: 1,
    description: 'Task description',
    completed: false,
  };
  const onDeleteTask = jest.fn();
  const onMarkCompleted = jest.fn();

  test('renders TaskItem with correct description', () => {
    const { getByText } = render(
      <TaskItem task={task} onDeleteTask={onDeleteTask} onMarkCompleted={onMarkCompleted} />
    );

    const descriptionElement = getByText('Task description');

    expect(descriptionElement).toBeInTheDocument();
  });

  test('calls onDeleteTask with correct taskId when delete button is clicked', () => {
    const { getByText } = render(
      <TaskItem task={task} onDeleteTask={onDeleteTask} onMarkCompleted={onMarkCompleted} />
    );

    const deleteButton = getByText('✖');

    fireEvent.click(deleteButton);

    expect(onDeleteTask).toHaveBeenCalledWith(task.id);
  });

  test('calls onMarkCompleted with correct taskId and checked value when TaskCompletedCheckBox is clicked', () => {
    const { getByRole } = render(
      <TaskItem task={task} onDeleteTask={onDeleteTask} onMarkCompleted={onMarkCompleted} />
    );

    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);

    expect(onMarkCompleted).toHaveBeenCalledWith({ id: task.id, completed: true });
  });
});
