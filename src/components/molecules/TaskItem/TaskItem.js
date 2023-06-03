import React from "react";
import { Task } from "../../atoms/Task/Task";
import { TaskCompletedCheckBox } from "../../atoms/TaskCompletedCheckBox/TaskCompletedCheckBox";
import { TaskDeleteBtn } from "../../atoms/TaskDeleteBtn/TaskDeleteBtn";
import "./TaskItem.css";

export const TaskItem = ({ task, onDeleteTask }) => {
  return (
    <div className="TaskItem">
      <TaskCompletedCheckBox />
      <Task description={task.description} />
      <TaskDeleteBtn onDeleteClick={onDeleteTask} taskId={task.id} />
    </div>
  );
};
