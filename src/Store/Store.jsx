import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./Slices/tasks-slice";

const Store = configureStore({
  reducer: TasksSlice,
});

export default Store;
