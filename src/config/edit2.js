import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  edit2: false,
};
const edit2 = createSlice({
  name: "edit2",
  initialState,
  reducers: {
    editElement: (state, action) => {
      state.edit2 = action;
      console.log(state.edit2);
    },
  },
});

export const showElem = (i) => i.edit2;
export const { editElement } = edit2.actions;

export default edit2.reducer;
