import React from 'react';
import './TaskDeleteBtn.css';

export function TaskDeleteBtn({ onDeleteClick, taskId }) {
  return (
    <button type="button" className="TaskDeleteBtn" onClick={() => onDeleteClick(taskId)}>
      &#x2716;
    </button>
  );
}

export default TaskDeleteBtn;
