import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
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
  },
});

export const { onToggled, addIndex } = redux.actions;

export default redux.reducer;
