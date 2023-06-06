import React from "react";
import "./TaskFilterBtn.css";

export const TaskFilterBtn = ({ children, onClick, active }) => {
  const buttonClass = active ? "TaskFilterBtn Active" : "TaskFilterBtn";

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
