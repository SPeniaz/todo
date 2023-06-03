import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../slicers/TaskSlicer"

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
