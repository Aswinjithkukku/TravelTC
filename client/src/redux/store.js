import { configureStore } from "@reduxjs/toolkit";
import excursionReducer from "./slices/excursionSlice";

const store = configureStore({
  reducer: {
    excursion: excursionReducer,
  },
  devTools: true,
});

export default store;
