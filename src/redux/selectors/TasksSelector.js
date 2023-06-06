import { createSelector } from '@reduxjs/toolkit';
import { FILTER } from '../../shared/Constants';

const getTasks = (state) => state.tasks.tasks;
const getFilter = (state) => state.tasks.filter;

const getFilteredTasks = createSelector([getTasks, getFilter], (tasks, filter) => {
  switch (filter) {
    case FILTER.ALL:
      return tasks;
    case FILTER.ACTIVE:
      return tasks?.filter((task) => !task.completed);
    case FILTER.COMPLETED:
      return tasks?.filter((task) => task.completed);
    default:
      return tasks;
  }
});

export default getFilteredTasks;
