const { configureStore } = require('@reduxjs/toolkit');
const transactionsReducer = require('./transactionsSlice.js').transactionsReducer;
const diagnosticsReducer = require('./diagnosticsSlice.js').diagnosticsReducer;

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    diagnostics: diagnosticsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck to avoid timeout warnings
    }),
});

module.exports = store;
