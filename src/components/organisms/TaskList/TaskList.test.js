import React from 'react';
import { render } from '@testing-library/react';
import { TaskList } from './TaskList';
import '@testing-library/jest-dom';

describe('TaskList', () => {
  const tasks = [
    { id: 1, description: 'Task 1', completed: false },
    { id: 2, description: 'Task 2', completed: true },
    { id: 3, description: 'Task 3', completed: false },
  ];
  const onDeleteTask = jest.fn();
  const onMarkCompleted = jest.fn();
  const onReorderTasks = jest.fn();

  test('renders TaskList with correct tasks', () => {
    const { getByText } = render(
      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onMarkCompleted={onMarkCompleted}
        onReorderTasks={onReorderTasks}
      />
    );

    const task1Element = getByText('Task 1');
    const task2Element = getByText('Task 2');
    const task3Element = getByText('Task 3');

    expect(task1Element).toBeInTheDocument();
    expect(task2Element).toBeInTheDocument();
    expect(task3Element).toBeInTheDocument();
  });
});
