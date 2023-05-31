import React from "react";
import { TaskFilterBtn } from "../../atoms/TasksFilterBtn/TaskFilterBtn";
import "./TaskSort.css";

export const TaskSort = () => {
  return (
    <div>
      <TaskFilterBtn>All</TaskFilterBtn>
      <TaskFilterBtn>Active</TaskFilterBtn>
      <TaskFilterBtn>Completed</TaskFilterBtn>
    </div>
  );
};
