import React from "react";
import "./TaskCompletedCheckBox.css";

export const TaskCompletedCheckBox = ({checked, onCheck}) => {
  return (
    <input
      type="checkbox"
      className="TaskCompletedCheckBox"
      checked={checked}
      onChange={(e) => onCheck(e.target.checked)}
    ></input>
  );
};
