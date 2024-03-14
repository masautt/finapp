import React from 'react';
import { useSelector } from 'react-redux';
import { selectSubcategories } from '../states/optionsSlice';

const SubcategoryFilters = () => {
  const subcategories = useSelector(selectSubcategories);

  // Create a copy of subcategories and then sort it alphabetically
  const sortedSubcategories = [...subcategories].sort((a, b) => a.localeCompare(b));

  return (
    <div style={{ textAlign: 'left', height: '100%', overflowY: 'auto', overflowX: 'hidden', scrollbarWidth: 'none', scrollbarColor: 'transparent transparent' }}>
      <h3 style={{ backgroundColor: 'white', padding: '0.5rem 0', margin: 0, position: 'sticky', top: 0, zIndex: 1 }}>Subcategories</h3>
      <div style={{ marginTop: '0.5rem', paddingBottom: '1rem' }}>
        {sortedSubcategories.map((subcategory, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id={`subcategory-${index}`} value={subcategory} />
            <label htmlFor={`subcategory-${index}`} style={{ marginLeft: '0.5rem' }}>{subcategory}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryFilters;
