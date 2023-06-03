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
    deleteTask: (state, action) =>{
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    }
  },
});

export const {
  addTask,
  deleteTask
} = tasksSlice.actions;

export default tasksSlice.reducer;
