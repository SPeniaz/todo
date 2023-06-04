import React from "react";
import { FILTER } from "../../../shared/Constants";
import { TaskFilterBtn } from "../../atoms/TasksFilterBtn/TaskFilterBtn";
import "./TaskSort.css";

export const TaskSort = () => {
  return (
    <div>
      <TaskFilterBtn>{FILTER.ALL}</TaskFilterBtn>
      <TaskFilterBtn>{FILTER.ACTIVE}</TaskFilterBtn>
      <TaskFilterBtn>{FILTER.COMPLETED}</TaskFilterBtn>
    </div>
  );
};
