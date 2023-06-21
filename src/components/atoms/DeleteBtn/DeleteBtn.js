import React from 'react';
import './DeleteBtn.css';

export function DeleteBtn({ onClick, id }) {
  return (
    <button type="button" className="DeleteBtn" onClick={() => onClick(id)}>
      &#x2716;
    </button>
  );
}

export default DeleteBtn;
