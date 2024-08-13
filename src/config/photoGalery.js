import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  photoGalery: {},
};
const photoGalery = createSlice({
  name: "photoGalery",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.photoGalery = { ...state.photoGalery, ...action.payload };
      console.log(state.photoGalery);
    },
   
  },
});

export const addElem = i => i.photoGalery;
export const { addElement } = photoGalery.actions;

export default photoGalery.reducer;
