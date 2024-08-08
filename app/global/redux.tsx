import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: true,
  userID: "" || null,
  index: 0,
};

const redux = createSlice({
  name: "CodeBook",
  initialState,
  reducers: {
    onToggled: (state: { toggle: boolean }) => {
      state.toggle = !state.toggle;
    },
    addIndex: (state) => {
      state.index = state.index + 1;
    },
    userData: (state, { payload }) => {
      state.userID = payload;
    },
    userDataOff: (state) => {
      state.userID = null;
    },
  },
});

export const { onToggled, addIndex, userDataOff, userData } = redux.actions;

export default redux.reducer;
