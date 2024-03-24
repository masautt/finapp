import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipients } from '../states/optionsSlice';

const RecipientFilters = () => {
  const recipients = useSelector(selectRecipients);

  return (
    <div style={{ textAlign: 'left', height: '100%', overflowY: 'auto', overflowX: 'hidden'}}>
      <h3 style={{ backgroundColor: 'white', padding: '0.5rem 0', margin: 0, position: 'sticky', top: 0, zIndex: 1 }}>Recipients</h3>
      <div style={{ marginTop: '0.5rem', marginRight : '3rem'}}>
        {recipients.map((recipient, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id={`recipient-${index}`} value={recipient} checked='true'  />
            <label htmlFor={`recipient-${index}`} style={{ marginLeft: '0.5rem' }}>{recipient}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipientFilters;
