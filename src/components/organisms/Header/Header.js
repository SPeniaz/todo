import React from 'react';
import { TaskInput } from '../../atoms/TaskInput/TaskInput';
import './Header.css';

export function Header({ onEnterPress }) {
  return (
    <div className="Header">
      <h1>TO DO</h1>
      <TaskInput onEnterPress={onEnterPress} />
    </div>
  );
}

export default Header;
