import { DesktopToDoTemplate } from "../templates/DesktopToDoTemplate";
import "./ToDoPage.css";
import {
  addTask,
  deleteTask,
  markCompleted,
  clearCompletedTasks,
  loadTasks,
} from "../../redux/slicers/TaskSlicer";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function ToDoPage() {
  const tasks = useSelector((state) => state.tasks.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasksLS");

    if (storedTasks) {
      const tasks = JSON.parse(storedTasks);
      dispatch(loadTasks(tasks));
    }
  }, [dispatch]);

  return (
    <DesktopToDoTemplate
      tasks={tasks}
      onAddTask={(task) => dispatch(addTask(task))}
      onDeleteTask={(id) => dispatch(deleteTask(id))}
      onMarkCompleted={(task) => dispatch(markCompleted(task))}
      onClearCompleted={() => dispatch(clearCompletedTasks())}
    />
  );
}

export default ToDoPage;
