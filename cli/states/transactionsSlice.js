const { createSlice } = require('@reduxjs/toolkit');
const constants = require("../config/constants.js");
const { isDateInRange } = require('../utils/dateHelper.js');

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { all: [], filtered1: [], filtered2: [], filtered3: [] },
  reducers: {
    addTransaction: (state, action) => {
      state.all.push(action.payload);
    },
    addTransactions: (state, action) => {
      state.all = state.all.concat(action.payload);
    },
    filterTransactions: (state, action) => {
      let filters = action.payload;
      let filteredTransactions = state.all;

      constants.filterAttributes.forEach(attribute => {
        if (filters[attribute]) {
          filteredTransactions = filteredTransactions.filter(x => x[attribute] === filters[attribute]);
        }
      });

      filteredTransactions = filteredTransactions.filter(transaction => {
        const date = new Date(transaction.date);
        return isDateInRange(date, filters.startDate, filters.endDate);
      });

      state.filtered1 = filteredTransactions;
    }
  },
});

const { addTransaction, addTransactions, filterTransactions } = transactionsSlice.actions;
const transactionsReducer = transactionsSlice.reducer;
const selectTransactions = state => state.transactions.all;
const selectFilteredTransactions = state => state.transactions.filtered;

module.exports = {
    addTransaction,
    addTransactions,
    filterTransactions,
    selectTransactions,
    selectFilteredTransactions,
    transactionsReducer
};
