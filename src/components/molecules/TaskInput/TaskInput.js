import React from "react";
import "./TaskInput.css"

export const TaskInput = () => {
  return (
    <input
      type="text"
      placeholder="Write new task and press Enter"
      className="TaskInput"
    ></input>
  );
};
