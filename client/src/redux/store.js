import { configureStore } from "@reduxjs/toolkit";
import { excursionReducer, generalReducer } from './slices'

const store = configureStore({
  reducer: {
    excursion: excursionReducer,
    general: generalReducer,
  },
  devTools: true,
});

export default store;
