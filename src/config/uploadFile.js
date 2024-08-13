import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  uploadFile: [],
};
const uploadFile = createSlice({
  name: "uploadFile",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.uploadFile.push(action.payload);
      console.log(state);
    },
  },
});

export const addElem = i => i.uploadFile;
export const { addElement } = uploadFile.actions;

export default uploadFile.reducer;
