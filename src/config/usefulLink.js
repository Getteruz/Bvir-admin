import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  usefulLink: {},
};
const usefulLink = createSlice({
  name: "usefulLink",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.usefulLink = { ...state.usefulLink, ...action.payload };
      console.log(state.usefulLink);
    },
  },
});

export const addElem = i => i.usefulLink;
export const { addElement } = usefulLink.actions;

export default usefulLink.reducer;
