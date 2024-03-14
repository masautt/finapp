import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipients } from '../states/optionsSlice';

const RecipientFilters = () => {
  const recipients = useSelector(selectRecipients);

  return (
    <div style={{ textAlign: 'left' }}>
      <h2>Recipients</h2>
      {recipients.map((recipient, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" id={`recipient-${index}`} value={recipient} />
          <label htmlFor={`recipient-${index}`} style={{ marginLeft: '0.5rem' }}>{recipient}</label>
        </div>
      ))}
    </div>
  );
}

export default RecipientFilters;
