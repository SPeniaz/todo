import React from "react";
import { Header } from "../organisms/Header/Header";
import { TaskList } from "../organisms/TaskList/TaskList";
import { Footer } from "../organisms/Footer/Footer";
import "./DesktopToDoTemplate.css";

import { v4 as uuidv4 } from "uuid";

export const DesktopToDoTemplate = ({
  tasks,
  filterValue,
  filteredTasks,
  onAddTask,
  onDeleteTask,
  onMarkCompleted,
  onClearCompleted,
  onChangeFilter,
}) => {
  const onAddNewTask = (description) => {
    const newTask = {
      id: uuidv4(),
      description: description,
      completed: false,
    };

    onAddTask(newTask);
  };

  const completedTasks = tasks.filter((el) => el.completed).length;
  const counterValue = tasks.length - completedTasks;

  return (
    <div>
      <div className="ImageBckg"></div>
      <div className="DesktopToDoTemplate">
        <Header onEnterPress={onAddNewTask} />
        <div className="Content">
          <TaskList
            tasks={filteredTasks?.length > 0 ? filteredTasks : []}
            onDeleteTask={onDeleteTask}
            onMarkCompleted={onMarkCompleted}
          />
          <Footer
            counterValue={counterValue}
            onChangeFilter={onChangeFilter}
            filterValue ={filterValue}
            onClearCompleted={onClearCompleted}
          />
        </div>
      </div>
    </div>
  );
};
