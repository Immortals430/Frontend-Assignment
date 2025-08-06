import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./reducers/tasks_reducer";
import { githubReducer } from "./reducers/github_reducer";

const store = configureStore({
    reducer: {
        tasksReducer,
        githubReducer
    }
})

export default store