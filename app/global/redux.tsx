import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const redux = createSlice({
  name: "CodeBook",
  initialState,
  reducers: {
    onToggled: (state: { toggle: boolean }) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { onToggled } = redux.actions;

export default redux.reducer;
