import { createSlice } from '@reduxjs/toolkit';
import constants from "../config/constants.js";

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
      let filteredTransactions = state.data;

      constants.filterAttributes.forEach(attribute => {
        if (action.payload[attribute]) {
          filteredTransactions = filteredTransactions.filter(x => x[attribute] === action.payload[attribute]);
        }
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
