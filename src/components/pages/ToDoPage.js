import { TaskInput } from "../atoms/TaskInput/TaskInput";
import { TaskItem } from "../molecules/TaskItem/TaskItem";
import { TaskSort } from "../molecules/TaskSort/TaskSort";
import "./ToDoPage.css";

function ToDoPage() {
  return (
    <div>
      <div className="ImageBckg"></div>
      <TaskInput />
      <TaskItem />
      <TaskSort />
    </div>
  );
}

export default ToDoPage;
