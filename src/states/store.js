// store.js
import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactionsSlice';
import { optionsReducer } from "./optionsSlice";

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    options: optionsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck to avoid timeout warnings
    }),
});

export default store;
