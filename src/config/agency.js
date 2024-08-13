import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  agency: {},
};
const agency = createSlice({
  name: "agency",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.agency = { ...state.agency, ...action.payload };
      console.log(state.agency);
    }
  },
});

export const addElem = i => i.agency;
export const { addElement } = agency.actions;

export default agency.reducer;
