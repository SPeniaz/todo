import React from "react";
import { Header } from "../organisms/Header/Header";
import { TaskList } from "../organisms/TaskList/TaskList";
import { Footer } from "../organisms/Footer/Footer";
import "./DesktopToDoTemplate.css";

import { v4 as uuidv4 } from "uuid";

export const DesktopToDoTemplate = ({ tasks, onAddTask, onDeleteTask }) => {
  const onAddNewTask = (description) => {
    const newTask = {
      id: uuidv4(),
      description: description,
      completed: false,
    };

    onAddTask(newTask);

    //console.log(newTask);
  };

  return (
    <div>
      <div className="ImageBckg"></div>
      <div className="DesktopToDoTemplate">
        <Header onEnterPress={onAddNewTask} />
        <div className="Content">
          <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
          <Footer />
        </div>
      </div>
    </div>
  );
};
