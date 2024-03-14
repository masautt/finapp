// transactionsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { headers } from "../config/constants";
import { isDateInRange } from '../utils/dateHelper';

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

      headers.forEach(attribute => {
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

export const { addTransaction, addTransactions, fetchTransactions } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
