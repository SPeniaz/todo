import { TaskInput } from "../molecules/TaskInput/TaskInput";
import { TaskItem } from "../molecules/TaskItem/TaskItem";
import "./ToDoPage.css";

function ToDoPage() {
  return (
    <div>
      <div className="ImageBckg"></div>
      <TaskInput />
      <TaskItem />
    </div>
  );
}

export default ToDoPage;
