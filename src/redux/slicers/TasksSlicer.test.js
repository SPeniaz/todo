import { FILTER } from '../../shared/Constants';
import tasksReducer, {
  addTask,
  deleteTask,
  markCompleted,
  filterChange,
  clearCompletedTasks,
  loadTasks,
  reoderTasks,
} from './TaskSlicer';

describe('todoSlice', () => {
  it('should handle addTask', () => {
    const initialState = {
      tasks: [],
      filter: FILTER.ALL,
    };

    const newState = tasksReducer(initialState, addTask({ description: 'Task 1' }));

    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks[0].description).toBe('Task 1');
  });

  it('should handle deleteTask', () => {
    const initialState = {
      tasks: [
        { id: 1, description: 'Task 1' },
        { id: 2, description: 'Task 2' },
      ],
      filter: FILTER.ALL,
    };

    const newState = tasksReducer(initialState, deleteTask(1));

    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks[0].id).toBe(2);
  });

  it('should handle markCompleted', () => {
    const initialState = {
      tasks: [
        { id: 1, description: 'Task 1', completed: false },
        { id: 2, description: 'Task 2', completed: false },
      ],
      filter: FILTER.ALL,
    };

    const newState = tasksReducer(initialState, markCompleted({ id: 1, completed: true }));

    expect(newState.tasks[0].completed).toBe(true);
  });

  it('should handle filterChange', () => {
    const initialState = {
      tasks: [],
      filter: FILTER.ALL,
    };

    const newState = tasksReducer(initialState, filterChange(FILTER.COMPLETED));

    expect(newState.filter).toBe(FILTER.COMPLETED);
  });

  it('should handle clearCompletedTasks', () => {
    const initialState = {
      tasks: [
        { id: 1, description: 'Task 1', completed: true },
        { id: 2, description: 'Task 2', completed: false },
      ],
      filter: FILTER.ALL,
    };

    const newState = tasksReducer(initialState, clearCompletedTasks());

    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks[0].id).toBe(2);
  });

  it('should handle loadTasks', () => {
    const initialState = {
      tasks: [],
      filter: FILTER.ALL,
    };

    const newState = tasksReducer(initialState, loadTasks([{ id: 1, description: 'Task 1' }]));

    expect(newState.tasks).toHaveLength(1);
    expect(newState.tasks[0].description).toBe('Task 1');
  });

  it('should handle reoderTasks', () => {
    const initialState = {
      tasks: [
        { id: 1, description: 'Task 1', completed: true },
        { id: 2, description: 'Task 2', completed: false },
      ],
      filter: FILTER.ALL,
    };

    const newState = tasksReducer(initialState, reoderTasks({ fromId: 1, toId: 2 }));

    expect(newState.tasks[0].description).toBe('Task 2');
    expect(newState.tasks[1].description).toBe('Task 1');
  });
});