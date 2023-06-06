import { createSlice } from "@reduxjs/toolkit";
import { FILTER } from "../../shared/Constants";

const initialState = {
  tasks: [],
  filter: FILTER.ALL,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    markCompleted: (state, action) => {
      const { id, completed } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.completed = completed;
      }
    },
    clearCompletedTasks: (state) => {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
    loadTasks: (state, action) => {
      state.tasks = action.payload;
    },
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
    reoderTasks: (state, action) => {
      const fromIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.fromId
      );
      const toIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.toId
      );
      const element = state.tasks[fromIndex];
      state.tasks.splice(fromIndex, 1);
      state.tasks.splice(toIndex, 0, element);
    },
  },
});

export const {
  addTask,
  deleteTask,
  markCompleted,
  clearCompletedTasks,
  loadTasks,
  filterChange,
  reoderTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
