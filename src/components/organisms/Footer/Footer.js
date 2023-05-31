import React from "react";
import { TaskCounter } from "../../atoms/TaskCounter/TaskCounter";
import { TaskFilterBtn } from "../../atoms/TasksFilterBtn/TaskFilterBtn";
import { TaskSort } from "../../molecules/TaskSort/TaskSort";
import './Footer.css'

export const Footer = () => {
  return (
    <div className="Footer">
      <TaskCounter count={5}/>
      <TaskSort />
      <TaskFilterBtn>Clear Completed</TaskFilterBtn>
    </div>
  );
};
