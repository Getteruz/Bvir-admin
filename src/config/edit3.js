import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  edit3: false,
};
const edit3 = createSlice({
  name: "edit3",
  initialState,
  reducers: {
    editElement: (state, action) => {
      state.edit3 = action;
      console.log(state.edit3);
    },
  },
});

export const showElem = (i) => i.edit3;
export const { editElement } = edit3.actions;

export default edit3.reducer;
