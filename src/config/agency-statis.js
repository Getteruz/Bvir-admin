import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  agencyStatis: {},
};
const agencyStatis = createSlice({
  name: "agencyStatis",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.agencyStatis = { ...state.agencyStatis, ...action.payload };
      console.log(state.agencyStatis);
    },
    
   
  },
});

export const addElem = i => i.agencyStatis;
export const { addElement } = agencyStatis.actions;

export default agencyStatis.reducer;
