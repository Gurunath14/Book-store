import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    additem: (state, action) => {
      state.item.push(action.payload);
    },
    clearcart: (state) => {
      state.item.length = 0;
    },
  },
});
export default cartslice.reducer;
export const { additem, clearcart } = cartslice.actions;
