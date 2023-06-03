import React from "react";
import "./TaskInput.css";
import { useRef } from "react";

export const TaskInput = ({ onEnterPress }) => {
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      onEnterPress(e.target.value);
      inputRef.current.value = "";
    }
  };

  return (
    <input
      type="text"
      placeholder="Write new task and press Enter"
      className="TaskInput"
      ref={inputRef}
      onKeyDown={handleKeyDown}
    ></input>
  );
};
