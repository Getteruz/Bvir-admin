import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  fastnews: {},
};
const fastnews = createSlice({
  name: "fastnews",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.fastnews = { ...state.fastnews, ...action.payload };
      console.log(state.fastnews);
    },
   
  },
});

export const addElem = i => i.fastnews;
export const { addElement } = fastnews.actions;

export default fastnews.reducer;
