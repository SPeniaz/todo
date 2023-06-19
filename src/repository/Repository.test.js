import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { addTask, deleteTask, markCompleted, clearCompletedTasks} from '../redux/slicers/TaskSlicer';

import localStorageMiddleware from './Repository';

describe('localStorageMiddleware', () => {
  let store;

  const TASKS_LOCAL_STORAGE_NAME = 'tasksLS';

  beforeEach(() => {
    localStorage.clear();

    store = configureStore({
      reducer: {
        tasks: tasksReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
      preloadedState: {
        tasks: {
          tasks: [
            {
              id: '1',
              description: 'Task 1',
              completed: true,
            },
          ],
        },
      },
    });
  });

  afterEach(() => {
    store = null;
  });

  it('should save tasks to local storage when addTask action is dispatched', () => {
    store.dispatch(addTask({ id: 2, description: 'Task 2' }));

    const storedTasks = JSON.parse(localStorage.getItem(TASKS_LOCAL_STORAGE_NAME));

    expect(storedTasks).toHaveLength(2);
    expect(storedTasks[1].description).toBe('Task 2');
  });

  it('should save tasks to local storage when deleteTask action is dispatched', () => {
    store.dispatch(deleteTask('1'));

    const storedTasks = JSON.parse(localStorage.getItem(TASKS_LOCAL_STORAGE_NAME));

    expect(storedTasks).toHaveLength(0);
  });

  it('should save tasks to local storage when checkTask action is dispatched', () => {
    store.dispatch(markCompleted({ id: '1', completed: false }));

    const storedTasks = JSON.parse(localStorage.getItem(TASKS_LOCAL_STORAGE_NAME));

    expect(storedTasks[0].completed).toBe(false);
  });

  it('should save tasks to local storage when clearCompletedTasks action is dispatched', () => {
    localStorage.setItem(TASKS_LOCAL_STORAGE_NAME, JSON.stringify([{ id: 1, description: 'Task 1', completed: true }]));
    store.dispatch(clearCompletedTasks());

    const storedTasks = JSON.parse(localStorage.getItem(TASKS_LOCAL_STORAGE_NAME));

    expect(storedTasks).toHaveLength(0);
  });
});