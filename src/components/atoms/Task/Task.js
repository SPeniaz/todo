import React from 'react';
import './Task.css';
import classNames from 'classnames';

export function Task({ description, completed }) {
  return <div className={classNames('Task', {'TaskInActive' : completed})}>{description}</div>;
}

export default Task;