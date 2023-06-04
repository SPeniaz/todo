import {
  addTask,
  clearCompletedTasks,
  deleteTask,
  markCompleted,
} from "../redux/slicers/TaskSlicer";

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    action.type === addTask.type ||
    action.type === deleteTask.type ||
    action.type === markCompleted.type ||
    action.type === clearCompletedTasks.type
  ) {
    const { tasks } = store.getState().tasks;
    localStorage.setItem("tasksLS", JSON.stringify(tasks));
  }

  return result;
};

export default localStorageMiddleware;
