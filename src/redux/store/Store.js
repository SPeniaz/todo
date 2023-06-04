import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "../../repository/Repository";
import tasksReducer from "../slicers/TaskSlicer";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
