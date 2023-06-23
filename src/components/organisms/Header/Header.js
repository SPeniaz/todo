import React from 'react';
import { TextInput } from '../../atoms/TextInput/TextInput';
import './Header.css';

export function Header({ onSubmit }) {
  return (
    <div className="Header">
      <h1>TO DO</h1>
      <TextInput onSubmit={onSubmit} placeholder = "Write new task and press Enter" />
    </div>
  );
}

export default Header;
