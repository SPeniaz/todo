import React from "react";
import { TaskCounter } from "../../atoms/TaskCounter/TaskCounter";
import { TaskFilterBtn } from "../../atoms/TasksFilterBtn/TaskFilterBtn";
import { TaskSort } from "../../molecules/TaskSort/TaskSort";
import "./Footer.css";

export const Footer = ({ counterValue, onClearCompleted }) => {
  const count = counterValue > 0 ? counterValue : 0;
  return (
    <div className="Footer">
      <TaskCounter count={count} />
      <TaskSort />
      <TaskFilterBtn onClearCompleted={onClearCompleted}>
        Clear Completed
      </TaskFilterBtn>
    </div>
  );
};
