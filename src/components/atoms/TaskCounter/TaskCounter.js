import React from 'react';
import './TaskCounter.css';

function TaskCounter({ count }) {
  return (
    <div className="TaskCounter">
      {count} item
      {count !== 1 && 's'} left
    </div>
  );
}

export default TaskCounter;
