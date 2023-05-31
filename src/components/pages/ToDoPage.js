import { TaskInput } from "../atoms/TaskInput/TaskInput";
import { TaskItem } from "../molecules/TaskItem/TaskItem";
import { Footer } from "../organisms/Footer/Footer";
import "./ToDoPage.css";

function ToDoPage() {
  return (
    <div>
      <div className="ImageBckg"></div>
      <TaskInput />
      <TaskItem />
      <Footer />
    </div>
  );
}

export default ToDoPage;
