const { configureStore } = require('@reduxjs/toolkit');
const { transactionsReducer } = require('./transactionsSlice.js');

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Disable serializableCheck to avoid timeout warnings
      serializableCheck: false, 
    }),
});

module.exports = store;
