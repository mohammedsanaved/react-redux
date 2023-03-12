import { createSlice } from "@reduxjs/toolkit";

export const incdecSlice = createSlice({
  name: "incdec",
  initialState: {
    value: 10,
  },
  reducers: {
    Inc: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += action.payload;
    },
    Dec: (state, action) => {
      state.value -= action.payload;
    },
    // incrementByAmount: (state, action) => {
    //   state += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { Inc, Dec } = incdecSlice.actions;

export default incdecSlice.reducer;
