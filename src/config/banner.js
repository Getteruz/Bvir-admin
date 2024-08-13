import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  banner: {},
};
const banner = createSlice({
  name: "banner",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.banner = { ...state.banner, ...action.payload };
      console.log(state.banner);
    },
  },
});

export const addElem = i => i.banner;
export const { addElement } = banner.actions;

export default banner.reducer;
