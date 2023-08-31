import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api";
import sortReducer from "../src/features/sortSlice"
export const store = configureStore({
     reducer: {
          sort:sortReducer,
          [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;