import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const { addTransaction, addTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
