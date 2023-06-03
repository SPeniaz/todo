import React from "react";
import "./TaskDeleteBtn.css";

export const TaskDeleteBtn = ({ onDeleteClick, taskId }) => {
  return (
    <button className="TaskDeleteBtn" onClick={() => onDeleteClick(taskId)}>
      &#x2716;
    </button>
  );
};
