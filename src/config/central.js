import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  central: {},
};
const central = createSlice({
  name: "central",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.central = { ...state.central, ...action.payload };
      console.log(state.central);
    }
  },
});

export const addElem = i => i.central;
export const { addElement } = central.actions;

export default central.reducer;
