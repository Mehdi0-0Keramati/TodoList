import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  popupOn: false,
  notificationOn: false,
  currentTheme: "dark",
};

const TasksSlice = createSlice({
  name: "TasksSlice",
  initialState,
  reducers: {
    setCurrentTheme: (state) => {
      state.currentTheme = state.currentTheme == "dark" ? "light" : "dark";
    },
    AddTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    popupOn: (state) => {
      state.popupOn = !state.popupOn;
    },
    notificationOn: (state) => {
      state.notificationOn = !state.notificationOn;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    isImportant: (state, action) => {
      const currentTask = state.tasks.find((task) => task.id == action.payload);
      currentTask.isImportant = !currentTask.isImportant;
    },
    isCompleted: (state, action) => {
      const currentTask = state.tasks.find((task) => task.id == action.payload);
      currentTask.isCompleted = !currentTask.isCompleted;
    },
    deleteALLTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const TasksActions = TasksSlice.actions;
export default TasksSlice.reducer;
