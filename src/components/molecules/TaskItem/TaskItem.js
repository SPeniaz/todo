import React from "react";
import { Task } from "../../atoms/Task/Task";
import { TaskCompletedCheckBox } from "../../atoms/TaskCompletedCheckBox/TaskCompletedCheckBox";
import { TaskDeleteBtn } from "../../atoms/TaskDeleteBtn/TaskDeleteBtn";
import "./TaskItem.css";

export const TaskItem = ({ task, onDeleteTask, onMarkCompleted }) => {
  return (
    <div className="TaskItem">
      <TaskCompletedCheckBox
        checked={task.completed}
        onCheck={(checked) => onMarkCompleted({ id: task.id, completed: checked })}
      />
      <Task description={task.description} completed={task.completed}/>
      <TaskDeleteBtn onDeleteClick={onDeleteTask} taskId={task.id} />
    </div>
  );
};
