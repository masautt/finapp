import React from 'react';
import { useSelector } from 'react-redux';
import { selectReimburses } from '../states/optionsSlice';

const ReimburseFilters = () => {
  const reimburses = useSelector(selectReimburses);

  return (
    <div style={{ textAlign: 'left' }}>
      <h2>Reimburses</h2>
      {reimburses.map((reimburse, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" id={`reimburse-${index}`} value={reimburse} />
          <label htmlFor={`reimburse-${index}`} style={{ marginLeft: '0.5rem' }}>{reimburse}</label>
        </div>
      ))}
    </div>
  );
};

export default ReimburseFilters;
