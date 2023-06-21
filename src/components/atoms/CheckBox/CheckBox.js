import React from "react";
import "./CheckBox.css";
import classNames from 'classnames';


export function CheckBox({checked, onChange, label}) {
  return (
    <>
      <input id ={label} type="checkbox" className="CheckBox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label && (
        <label className={classNames('Task', {'TaskInActive' : checked})} htmlFor={label} data-testid="task">
          {label}
        </label>
      )}
    </>
  );
}

export default CheckBox;
