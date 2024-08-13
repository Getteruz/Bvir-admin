import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  photo: {},
};
const photo = createSlice({
  name: "photo",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.photo = { ...state.photo, ...action.payload };
      console.log(state.photo);
    },
  },
});

export const addElem = i => i.photo;
export const { addElement } = photo.actions;

export default photo.reducer;
