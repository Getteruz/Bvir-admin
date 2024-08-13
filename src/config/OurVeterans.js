import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ourveter: {},
};
const ourveter = createSlice({
  name: "ourveter",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.ourveter = { ...state.ourveter, ...action.payload };
      console.log(state.ourveter);
    },
  },
});

export const addElem = i => i.ourveter;
export const { addElement } = ourveter.actions;

export default ourveter.reducer;
