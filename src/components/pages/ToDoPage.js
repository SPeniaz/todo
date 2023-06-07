import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import getFilteredTasks from '../../redux/selectors/TasksSelector';

import { DesktopToDoTemplate } from '../templates/DesktopToDoTemplate';
import './ToDoPage.css';
import {
  addTask,
  deleteTask,
  markCompleted,
  clearCompletedTasks,
  loadTasks,
  filterChange,
  reoderTasks,
} from '../../redux/slicers/TaskSlicer';

function ToDoPage() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filterValue = useSelector((state) => state.tasks.filter);
  const filteredTasks = useSelector(getFilteredTasks);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasksLS');

    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      dispatch(loadTasks(parsedTasks));
    }
  }, [dispatch]);

  return (
    <DesktopToDoTemplate
      tasks={tasks}
      filterValue={filterValue}
      filteredTasks={filteredTasks}
      onAddTask={(task) => dispatch(addTask(task))}
      onDeleteTask={(id) => dispatch(deleteTask(id))}
      onChangeFilter={(filter) => dispatch(filterChange(filter))}
      onMarkCompleted={(task) => dispatch(markCompleted(task))}
      onClearCompleted={() => dispatch(clearCompletedTasks())}
      onReoderTasks={({ fromId, toId }) => dispatch(reoderTasks({ fromId, toId }))}
    />
  );
}

export default ToDoPage;
