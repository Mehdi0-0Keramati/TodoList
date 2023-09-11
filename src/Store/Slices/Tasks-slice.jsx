import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  horizontalTasksAlign: false,
  popupOn: false,
  notificationOn: false,
  sidebarOn: false,
  menuOn: false,
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
    HorizontalTasksAlign: (state) => {
      state.horizontalTasksAlign = !state.horizontalTasksAlign;
    },
    popupOn: (state) => {
      state.popupOn = !state.popupOn;
    },
    sidebarOn: (state) => {
      state.sidebarOn = !state.sidebarOn;
    },
    menuOn: (state, action) => {
      state.menuOn = action.payload;
    },
    notificationOn: (state, action) => {
      state.notificationOn = action.payload;
    },
    isImportant: (state, action) => {
      const currentTask = state.tasks.find((task) => task.id == action.payload);
      currentTask.isImportant = !currentTask.isImportant;
    },
    isCompleted: (state, action) => {
      const currentTask = state.tasks.find((task) => task.id == action.payload);
      currentTask.isCompleted = !currentTask.isCompleted;
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    deleteALLTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const TasksActions = TasksSlice.actions;
export default TasksSlice.reducer;
