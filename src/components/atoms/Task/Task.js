import React from "react";
import "./Task.css";

export const Task = ({ description, completed }) => {
  return (
    <div className={`Task ${completed ? "TaskInActive" : ""}`}>
      {description}
    </div>
  );
};
