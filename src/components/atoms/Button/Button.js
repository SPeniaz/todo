import React from 'react';
import './Button.css';

export function Button({ onClick, id, btnText }) {
  return (
    <button type="button" className="Button" onClick={() => onClick(id)}>
      {btnText}
    </button>
  );
}

export default Button;
