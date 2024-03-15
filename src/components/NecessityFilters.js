import React from 'react';
import { useSelector } from 'react-redux';
import { selectNecessities } from '../states/optionsSlice';

const NecessityFilters = () => {
  const necessities = useSelector(selectNecessities);

  return (
    <div style={{ textAlign: 'left', height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
      <h3 style={{ backgroundColor: 'white', padding: '0.5rem 0', margin: 0, position: 'sticky', top: 0, zIndex: 1 }}>Necessities</h3>
      <div style={{ marginTop: '0.5rem' }}>
        {necessities.map((necessity, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id={`necessity-${index}`} value={necessity} checked='true' />
            <label htmlFor={`necessity-${index}`} style={{ marginLeft: '0.5rem' }}>{necessity}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NecessityFilters;
