import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: [],
};

const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    addSort: (state, action) => {
      state.sort = action.payload;
       },
       removeSort: (state) => {
            state.sort=""
       }
  },
});

export const { addSort,removeSort} = sortSlice.actions;
export default sortSlice.reducer;