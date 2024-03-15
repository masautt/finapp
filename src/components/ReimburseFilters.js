import React from 'react';
import { useSelector } from 'react-redux';
import { selectReimburses } from '../states/optionsSlice';

const ReimburseFilters = () => {
  const reimburses = useSelector(selectReimburses);

  return (
    <div style={{ textAlign: 'left' }}>
      <h3 style={{ margin: '0' }}>Reimburses</h3>
      {reimburses.map((reimburse, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" id={`reimburse-${index}`} value={reimburse} checked='true' />
          <label htmlFor={`reimburse-${index}`} style={{ marginLeft: '0.5rem' }}>{reimburse}</label>
        </div>
      ))}
    </div>
  );
};

export default ReimburseFilters;
