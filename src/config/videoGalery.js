import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  videoGalery: {},
};
const videoGalery = createSlice({
  name: "videoGalery",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.videoGalery = { ...state.videoGalery, ...action.payload };
      console.log(state.videoGalery);
    },
   
  },
});

export const addElem = i => i.videoGalery;
export const { addElement } = videoGalery.actions;

export default videoGalery.reducer;
