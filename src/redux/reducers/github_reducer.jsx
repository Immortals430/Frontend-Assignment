import { createSlice } from "@reduxjs/toolkit";

// initial state
let initialState = {
    user: null
};

// slice
const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    UPDATE_USER: (state, action) => {
      state.user = action.payload
    },
  },
});

// exports
export const { UPDATE_USER } = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
export const githubSelector = (state) => state.githubReducer;
