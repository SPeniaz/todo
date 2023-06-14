import { render, screen, fireEvent } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import { DesktopToDoTemplate } from './DesktopToDoTemplate';
import '@testing-library/jest-dom';

describe('DesktopToDoTemplate', () => {
  const tasks = [
    { id: uuidv4(), description: 'Task 1', completed: false },
    { id: uuidv4(), description: 'Task 2', completed: true },
  ];
  const filteredTasks = tasks;

  const mockAddTask = jest.fn();
  const mockDeleteTask = jest.fn();
  const mockMarkCompleted = jest.fn();
  const mockClearCompleted = jest.fn();
  const mockChangeFilter = jest.fn();
  const mockReorderTasks = jest.fn();

  beforeEach(() => {
    render(
      <DesktopToDoTemplate
        tasks={tasks}
        filterValue="all"
        filteredTasks={filteredTasks}
        onAddTask={mockAddTask}
        onDeleteTask={mockDeleteTask}
        onMarkCompleted={mockMarkCompleted}
        onClearCompleted={mockClearCompleted}
        onChangeFilter={mockChangeFilter}
        onReoderTasks={mockReorderTasks}
      />
    );
  });

  test('calls onAddTask when a new task is added', () => {
    const input = screen.getByPlaceholderText('Write new task and press Enter');
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    const newTask = {
      id: expect.any(String),
      description: 'New Task',
      completed: false,
    };

    expect(mockAddTask).toHaveBeenCalledWith(newTask);
  });
  
  test('calls onClearCompleted when "Clear Completed" button is clicked', () => {
    const clearButton = screen.getByText('Clear completed');
    fireEvent.click(clearButton);
  
    expect(mockClearCompleted).toHaveBeenCalled();
  });
  
  test('calls onChangeFilter when a filter button is clicked', () => {
    const activeFilter = screen.getByText('All');
    fireEvent.click(activeFilter);
  
    expect(mockChangeFilter).toHaveBeenCalledWith('All');
  });
});
