import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
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
  },
});

export const { addTask, deleteTask, markCompleted, clearCompletedTasks, loadTasks } =
  tasksSlice.actions;

export default tasksSlice.reducer;
