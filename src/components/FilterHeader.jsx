import React from 'react';
import SingleSelect from './SingleSelect';

const FilterHeader = ({ onChange, value, loading, options, defaultValue  }) => {
  return (
    <div className="filter-container">
      <div>Filter by year</div>
      <div className="select-container">
        <SingleSelect
          defaultValue={defaultValue}
          loading={loading}
          options={options}
          onChange={e => onChange(e)}
          value={value}
          placeholder="Select Year"
          className="customSelect"
          currentThemeBG="#fff"
          currentThemeColor="#000"
        />
      </div>
    </div>
  );
};

export default FilterHeader;
