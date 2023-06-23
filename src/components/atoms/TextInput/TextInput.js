import React, { useRef } from 'react';
import './TextInput.css';

export function TextInput({ onSubmit, placeholder }) {
  const defaultPlaceholder = 'Enter data';
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      onSubmit(e.target.value);
      inputRef.current.value = '';
    }
  };

  return (
    <input
      type="text"
      placeholder={placeholder || defaultPlaceholder }
      className="TextInput"
      ref={inputRef}
      onKeyDown={handleKeyDown}
    />
  );
}

export default TextInput;
