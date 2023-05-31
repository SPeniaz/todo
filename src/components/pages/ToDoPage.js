import { TaskItem } from "../molecules/TaskItem/TaskItem";
import { Footer } from "../organisms/Footer/Footer";
import { Header } from "../organisms/Header/Header";
import { TaskList } from "../organisms/TaskList/TaskList";
import "./ToDoPage.css";

function ToDoPage() {
  return (
    <div>
      <div className="ImageBckg"></div>
      <Header />
      <TaskList />
      <Footer />
    </div>
  );
}

export default ToDoPage;
