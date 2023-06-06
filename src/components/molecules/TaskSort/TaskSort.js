import React from "react";
import { FILTER } from "../../../shared/Constants";
import { TaskFilterBtn } from "../../atoms/TasksFilterBtn/TaskFilterBtn";
import "./TaskSort.css";

export const TaskSort = ({ onChangeFilter, filterValue }) => {
  return (
    <div>
      <TaskFilterBtn
        active={filterValue === FILTER.ALL}
        onClick={() => onChangeFilter(FILTER.ALL)}
      >
        {FILTER.ALL}
      </TaskFilterBtn>
      <TaskFilterBtn
        active={filterValue === FILTER.ACTIVE}
        onClick={() => onChangeFilter(FILTER.ACTIVE)}
      >
        {FILTER.ACTIVE}
      </TaskFilterBtn>
      <TaskFilterBtn
        active={filterValue === FILTER.COMPLETED}
        onClick={() => onChangeFilter(FILTER.COMPLETED)}
      >
        {FILTER.COMPLETED}
      </TaskFilterBtn>
    </div>
  );
};
