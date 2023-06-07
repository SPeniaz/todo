import React from 'react';
import './Task.css';

export function Task({ description, completed }) {
  return <div className={`Task ${completed ? 'TaskInActive' : ''}`}>{description}</div>;
}

export default Task;
