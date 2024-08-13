import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  vacancy2: {},
};
const vacancy2 = createSlice({
  name: "vacancy2",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.vacancy2 = { ...state.vacancy2, ...action.payload };
      console.log(state.vacancy2);
    },
  },
});

export const addElem = i => i.vacancy2;
export const { addElement } = vacancy2.actions;

export default vacancy2.reducer;
