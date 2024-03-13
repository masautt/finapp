const { configureStore } = require('@reduxjs/toolkit');
const { transactionsReducer } = require('./transactionsSlice.js');

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck to avoid timeout warnings
    }),
});

module.exports = store;
