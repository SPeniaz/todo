import React from "react";
import "./TaskFilterBtn.css";

export const TaskFilterBtn = ({ children, onClearCompleted }) => {
  return (
    <button className="TaskFilterBtn" onClick={onClearCompleted}>
      {children}
    </button>
  );
};
