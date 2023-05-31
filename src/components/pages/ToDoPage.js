import { TaskItem } from "../molecules/TaskItem/TaskItem";
import { Footer } from "../organisms/Footer/Footer";
import { Header } from "../organisms/Header/Header";
import "./ToDoPage.css";

function ToDoPage() {
  return (
    <div>
      <div className="ImageBckg"></div>
      <Header />
      <TaskItem />
      <Footer />
    </div>
  );
}

export default ToDoPage;
