import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  statistic: {},
};
const statistic = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.statistic = { ...state.statistic, ...action.payload };
      console.log(state.statistic);
    },
  },
});

export const addElem = i => i.statistic;
export const { addElement } = statistic.actions;

export default statistic.reducer;
