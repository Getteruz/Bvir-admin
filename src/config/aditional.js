import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  aditional: {},
};
const aditional = createSlice({
  name: "aditional",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.aditional = { ...state.aditional, ...action.payload };
      console.log(state.aditional);
    }
  },
});

export const addElem = i => i.aditional;
export const { addElement } = aditional.actions;

export default aditional.reducer;
