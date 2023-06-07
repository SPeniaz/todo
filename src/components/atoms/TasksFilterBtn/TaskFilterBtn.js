import React from 'react';
import './TaskFilterBtn.css';

export function TaskFilterBtn({ children, onClick, active }) {
  const buttonClass = active ? 'TaskFilterBtn Active' : 'TaskFilterBtn';

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default TaskFilterBtn;
