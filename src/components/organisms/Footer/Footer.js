import React from 'react';
import { CLEAR_COMPLETED } from '../../../shared/Constants';

import { TaskCounter } from '../../atoms/TaskCounter/TaskCounter';
import { TaskFilterBtn } from '../../atoms/TasksFilterBtn/TaskFilterBtn';
import { TaskSort } from '../../molecules/TaskSort/TaskSort';
import './Footer.css';

export function Footer({ counterValue, onClearCompleted, onChangeFilter, filterValue }) {
  const count = counterValue > 0 ? counterValue : 0;
  return (
    <div className="Footer">
      <TaskCounter count={count} />
      <TaskSort onChangeFilter={onChangeFilter} filterValue={filterValue} />
      <TaskFilterBtn onClick={onClearCompleted}>{CLEAR_COMPLETED}</TaskFilterBtn>
    </div>
  );
}

export default Footer;
