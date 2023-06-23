import React from "react";
import "./CheckBox.css";
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';


export function CheckBox({checked, onChange, label}) {
  const id = uuidv4();
  return (
    <>
      <input
        id={id}
        type="checkbox"
        className="CheckBox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className={classNames('Task', { TaskInActive: checked })} htmlFor={id} data-testid="task">
        {label}
      </label>
    </>
  );
}

export default CheckBox;
