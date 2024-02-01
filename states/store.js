import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactionsSlice.js';

const store = configureStore({
  reducer: {
    transactions: transactionsReducer
  },
  middleware: (m) => m({
    // disabling serializableCheck to avoid timeout warnings
    serializableCheck: false
  })
});

export default store;