import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../states/transactionsSlice';

const Content2 = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <div style={{height : '95%', width : '95%', overflowY: 'auto' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {transactions.map(transaction => (
          <li key={transaction.id}>
            {transaction.category} - {transaction.subcategory} - {transaction.amount} - {transaction.business} - {transaction.city} - {transaction.state} - {transaction.description} - {transaction.comments}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content2;
