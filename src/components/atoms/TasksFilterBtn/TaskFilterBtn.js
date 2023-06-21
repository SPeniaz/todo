import React from 'react';
import './TaskFilterBtn.css';
import classNames from 'classnames';

export function TaskFilterBtn({ children, onClick, active }) {
  return (
    <button type="button" className={classNames('TaskFilterBtn', {'Active': active})} onClick={onClick}>
      {children}
    </button>
  );
}

export default TaskFilterBtn;
