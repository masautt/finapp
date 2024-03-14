import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions, selectFilteredTransactions } from '../states/transactionsSlice';

const TitleBar = () => {
  const allTransactions = useSelector(selectTransactions);
  const filteredTransactions = useSelector(selectFilteredTransactions);

  const totalTransactionCount = allTransactions.length;
  const filteredTransactionCount = filteredTransactions.length;

  return (
    <div>
      {filteredTransactionCount} / {totalTransactionCount} total transactions
    </div>
  );
}

export default TitleBar;
