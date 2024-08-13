import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  comunacation: {},
};
const comunacation = createSlice({
  name: "comunacation",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.comunacation = { ...state.comunacation, ...action.payload };
      console.log(state.comunacation);
    }
  },
});

export const addElem = i => i.comunacation;
export const { addElement } = comunacation.actions;

export default comunacation.reducer;
