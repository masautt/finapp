import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from '../states/optionsSlice'; 

const Content3 = () => {
  const categories = useSelector(selectCategories);

  return (
    <div style={{ textAlign: 'left', height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
      <h3 style={{ backgroundColor: 'white', padding: '0.5rem 0', margin: 0, position: 'sticky', top: 0, zIndex: 1 }}>Categories</h3>
      <div style={{ marginTop: '0.5rem' }}>
        {categories.map((category, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id={`category-${index}`} value={category} />
            <label htmlFor={`category-${index}`} style={{ marginLeft: '0.5rem' }}>{category}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content3;
