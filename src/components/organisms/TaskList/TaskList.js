import React from "react";
import { TaskItem } from "../../molecules/TaskItem/TaskItem";
import "./TaskList.css";

export const TaskList = ({ tasks }) => {
  return (
    <div className="TaskList">
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} task={task} />
      ))}
    </div>
  );
};
