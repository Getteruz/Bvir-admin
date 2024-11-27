import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  vacancy: {},
};
const vacancy = createSlice({
  name: "vacancy",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.vacancy = { ...state.vacancy, ...action.payload };
      console.log(state.vacancy);
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !=== action.payload.id),
      };
    },
  },
});

export const addElem = i => i.vacancy;
export const { addElement } = vacancy.actions;

export default vacancy.reducer;
