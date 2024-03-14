import { createSlice } from '@reduxjs/toolkit';
import { headers } from "../config/constants";
import { isDateInRange } from '../utils/dateHelper';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { all: [], filtered: [], stats : {
    minAmount : 0,
    maxAmount : 0
  } },
  reducers: {
    addTransactions: (state, action) => {
      state.all = state.all.concat(action.payload);
      state.stats.maxAmount = state.all.reduce((maxAmount, transaction) =>
        transaction.amount > maxAmount ? transaction.amount : maxAmount, 0);
      state.filtered = state.all;
    },
    filterTransactions: (state, action) => {
      let filters = action.payload;
      let filtered = state.all;

      headers.forEach(attribute => {
        if (filters[attribute]) {
          filtered = filtered.filter(x => x[attribute] === filters[attribute]);
        }
      });

      filtered = filtered.filter(transaction => {
        const date = new Date(transaction.date);
        return isDateInRange(date, filters.startDate, filters.endDate);
      });

      state.filtered = filtered;
    }
  },
});

export const { addTransactions, filterTransactions } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;

export const selectTransactions = state => state.transactions.all;
export const selectFilteredTransactions = state => state.transactions.filtered;
export const selectTransactionStats = state => state.transactions.stats;