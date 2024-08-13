import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  event: {},
};
const event = createSlice({
  name: "event",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.event = { ...state.event, ...action.payload };
      console.log(state.event);
    }
  },
});

export const addElem = i => i.event;
export const { addElement } = event.actions;

export default event.reducer;
