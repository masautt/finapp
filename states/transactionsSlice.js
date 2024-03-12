import { createSlice } from '@reduxjs/toolkit';
import constants from "../config/constants.js";
import { isDateInRange } from '../utils/dateHelper.js';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { data: [] },
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
    
    

      const filteredState = {
        data: state.data,
        filteredData: filteredTransactions
      };

      return filteredState;
    }
  },
});

export const { addTransaction, addTransactions, fetchTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
