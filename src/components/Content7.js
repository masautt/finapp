import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactionStats } from '../states/transactionsSlice';

const Content7 = () => {
  const { minAmount, maxAmount } = useSelector(selectTransactionStats);
  const [minInput, setMinInput] = useState(minAmount);
  const [maxInput, setMaxInput] = useState(maxAmount);
  const dispatch = useDispatch();

  const handleMinInputChange = (event) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue) && newValue <= maxAmount) {
      setMinInput(newValue);
    }
  };

  const handleMaxInputChange = (event) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue) && newValue >= minAmount) {
      setMaxInput(newValue);
    }
  };

  const handleApplyClick = () => {
    // Dispatch action to filter transactions based on the new min and max values
  };

  return (
    <div>
      <h2>Amount Range</h2>
      <div>
        <label>Min :</label>
        <input 
          type="number"
          min={minAmount}
          max={maxAmount}
          value={minInput}
          onChange={handleMinInputChange}
        />
      </div>
      <div>
        <label>Max : </label>
        <input 
          type="number"
          min={minAmount}
          max={maxAmount}
          value={maxInput}
          onChange={handleMaxInputChange}
        />
      </div>
      <button onClick={handleApplyClick}>Apply</button>
    </div>
  );
};

export default Content7;
