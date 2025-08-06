import { createSlice } from "@reduxjs/toolkit";

// initial state
let initialState = {
  taskList: [
    { task: "Build Youtube clone using Reactjs and Nextjs "},
    { task: "Learn Typescript"},
    { task: "Complete Frontend Internship Assignment"},
  ],
};

// slice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    ADD_TASK: (state, action) => {
      state.taskList = [...state.taskList, action.payload]
    },
    DELETE_TASK: (state, action) => {
      state.taskList.splice(action.payload, 1)
    }
  },
});

// exports
export const { ADD_TASK, DELETE_TASK } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
export const tasksSelector = (state) => state.tasksReducer;
