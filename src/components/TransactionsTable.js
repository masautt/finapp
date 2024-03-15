import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from '../states/transactionsSlice';

const TransactionsTable = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <div style={{ height: '95%', width: '95%', overflowY: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Category</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Subcategory</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Amount</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Business</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>City</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>State</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Description</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Comments</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Recipient</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Necessity</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Reimburse</th>
            <th style={{ border: '1px solid #ddd', fontSize: '1.2em' }}>Recurring</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td style={{ border: '1px solid #ddd' }}>{transaction.category}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.subcategory}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.amount}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.business}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.city}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.state}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.description}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.comments}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.recipient}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.necessity}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.reimburse}</td>
              <td style={{ border: '1px solid #ddd' }}>{transaction.recurring}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
