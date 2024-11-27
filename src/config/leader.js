import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  leader: {},
};
const leader = createSlice({
  name: "leader",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.leader = { ...state.leader, ...action.payload };
      console.log(state.leader);
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !=== action.payload.id),
      };
    },
  },
});

export const addElem = i => i.leader;
export const { addElement } = leader.actions;

export default leader.reducer;
