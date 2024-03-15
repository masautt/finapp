import React from 'react';
import { useSelector } from 'react-redux';
import { selectBusinesses } from '../states/optionsSlice';

const BusinessFilters = () => {
  const businesses = useSelector(selectBusinesses);

  // Create a copy of businesses and then sort it alphabetically
  const sortedBusinesses = [...businesses].sort((a, b) => a.localeCompare(b));

  return (
    <div style={{ textAlign: 'left', height: '100%', overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', scrollbarColor: 'transparent transparent' }}>
      <h3 style={{ backgroundColor: 'white', padding: '0.5rem 0', margin: 0, position: 'sticky', top: 0, zIndex: 1, paddingLeft: '0.5rem' }}>Businesses</h3>
      <div style={{paddingBottom: '1rem' }}>
        {sortedBusinesses.map((business, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id={`business-${index}`} value={business} checked='true' />
            <label htmlFor={`business-${index}`} style={{ marginLeft: '0.5rem' }}>{business}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessFilters;
