import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: true,
  userID: "" || null,
  index: 0,
  counter: 1,
  level: 1,

  question: [],
  stage: [],
  paths: "",
};

const redux = createSlice({
  name: "CodeBook",
  initialState,
  reducers: {
    onToggled: (state: { toggle: boolean }) => {
      state.toggle = !state.toggle;
    },
    addIndex: (state, { payload }) => {
      state.index = payload;
    },
    questionData: (
      state: {
        toggle: boolean;
        userID: null;
        index: number;
        question: never[];
      },
      { payload }
    ) => {
      state.question = payload;
    },
    userData: (state, { payload }) => {
      state.userID = payload;
    },
    userDataOff: (state) => {
      state.userID = null;
    },
    setStage: (state, { payload }) => {
      state.userID = payload;
    },
    setPaths: (state, { payload }) => {
      state.paths = payload;
    },
    setCounter: (state, { payload }) => {
      state.counter = payload;
    },
    setLevel: (state, { payload }) => {
      state.level = payload;
    },
  },
});

export const {
  questionData,
  onToggled,
  addIndex,
  userDataOff,
  userData,
  setStage,
  setPaths,
  setCounter,
  setLevel,
} = redux.actions;

export default redux.reducer;
