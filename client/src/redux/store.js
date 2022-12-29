import { configureStore } from "@reduxjs/toolkit";
import { excursionReducer, generalReducer, paymentReducer } from './slices'

const store = configureStore({
  reducer: {
    excursion: excursionReducer,
    general: generalReducer,
    payment: paymentReducer,
  },
  devTools: true,
});

export default store;
