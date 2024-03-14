// store.js
import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from './transactionsSlice';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck to avoid timeout warnings
    }),
});

export default store;
