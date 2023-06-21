import React from "react";
import "./CheckBox.css";


export function CheckBox({checked, onChange}) {
  return (
    <input
      type="checkbox"
      className="CheckBox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
     />
  );
}

export default CheckBox
