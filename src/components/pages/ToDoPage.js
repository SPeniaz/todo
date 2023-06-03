import { DesktopToDoTemplate } from "../templates/DesktopToDoTemplate";
import "./ToDoPage.css";
import {
  addTask
} from "../../redux/slicers/TaskSlicer"

import { useSelector, useDispatch } from 'react-redux';

function ToDoPage() {
  const tasks = useSelector((state) => state.tasks.tasks);

  const dispatch = useDispatch();


  return (
    <DesktopToDoTemplate
      tasks = {tasks}
      onAddTask={(task) => dispatch(addTask(task))}/>
  );
}

export default ToDoPage;
