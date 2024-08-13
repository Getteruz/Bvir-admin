import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  reigional1: {},
};
const reigional1 = createSlice({
  name: "reigional1",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.reigional1 = { ...state.reigional1, ...action.payload };
      console.log(state.reigional1);
    },
  },
});

export const addElem = i => i.reigional1;
export const { addElement } = reigional1.actions;

export default reigional1.reducer;
