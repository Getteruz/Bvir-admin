import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  news: {},
};
const news = createSlice({
  name: "news",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.news = { ...state.news, ...action.payload };
      console.log(state.news);
    },
   
  },
});

export const addElem = i => i.news;
export const { addElement } = news.actions;

export default news.reducer;
