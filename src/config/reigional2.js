import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  reigional2: {},
};
const reigional2 = createSlice({
  name: "reigional2",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.reigional2 = { ...state.reigional2, ...action.payload };
      console.log(state.reigional2);
    },
  },
});

export const addElem = i => i.reigional2;
export const { addElement } = reigional2.actions;

export default reigional2.reducer;
