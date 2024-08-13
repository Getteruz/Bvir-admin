import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  edit1: false,
};
const edit1 = createSlice({
  name: "edit1",
  initialState,
  reducers: {
    editElement: (state, action) => {
      state.edit1 = action;
      console.log(state.edit1);
    },
  
  },
});

export const showElem = (i) => i.edit1;
export const { editElement } = edit1.actions;

export default edit1.reducer;
