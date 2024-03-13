const { createSlice } = require('@reduxjs/toolkit');
const constants = require("../config/constants.js");
const { isDateInRange } = require('../utils/dateHelper.js');

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { data: [], filteredData: [] },
  reducers: {
    addTransaction: (state, action) => {
      state.data.push(action.payload);
    },
    addTransactions: (state, action) => {
      state.data = state.data.concat(action.payload);
    },
    fetchTransactions: (state, action) => {
      let filters = action.payload;
      let filteredTransactions = state.data;

      constants.filterAttributes.forEach(attribute => {
        if (filters[attribute]) {
          filteredTransactions = filteredTransactions.filter(x => x[attribute] === filters[attribute]);
        }
      });

      filteredTransactions = filteredTransactions.filter(transaction => {
        const date = new Date(transaction.date);
        return isDateInRange(date, filters.startDate, filters.endDate);
      });

      state.filteredData = filteredTransactions;
    }
  },
});

const { addTransaction, addTransactions, fetchTransactions } = transactionsSlice.actions;
const transactionsReducer = transactionsSlice.reducer;

module.exports = {
    addTransaction,
    addTransactions,
    fetchTransactions,
    transactionsReducer
};
