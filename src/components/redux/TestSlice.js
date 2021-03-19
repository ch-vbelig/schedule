import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "test",
  initialState: { count: 1000},
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
