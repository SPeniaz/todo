import { DesktopToDoTemplate } from "../templates/DesktopToDoTemplate";
import "./ToDoPage.css";
import { addTask, deleteTask, markCompleted } from "../../redux/slicers/TaskSlicer";

import { useSelector, useDispatch } from "react-redux";

function ToDoPage() {
  const tasks = useSelector((state) => state.tasks.tasks);

  const dispatch = useDispatch();

  return (
    <DesktopToDoTemplate
      tasks={tasks}
      onAddTask={(task) => dispatch(addTask(task))}
      onDeleteTask={(id) => dispatch(deleteTask(id))}
      onMarkCompleted={(task) => dispatch(markCompleted(task))}
    />
  );
}

export default ToDoPage;
