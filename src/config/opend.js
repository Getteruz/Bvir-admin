import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  openD: {},
};
const openD = createSlice({
  name: "openD",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.openD = { ...state.openD, ...action.payload };
      console.log(state.openD);
    },
  },
});

export const addElem = i => i.openD;
export const { addElement } = openD.actions;
export default openD.reducer;
