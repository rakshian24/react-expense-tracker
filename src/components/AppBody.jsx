import moment from 'moment';
import React, { useState } from 'react';
import useGetYearsList from '../hooks/useGetYearsList';
import FilterHeader from './FilterHeader';

const AppBody = () => {
  const [loading, yearsList] = useGetYearsList();
  const [selectedYear, setSelectedYear] = useState();

  const handleOnYearChange = e => {
    console.log('Selected Year = ', e);
    setSelectedYear(e);
  };
  return (
    <div className="app-body">
      <FilterHeader
        value={selectedYear}
        onChange={handleOnYearChange}
        loading={loading}
        options={yearsList}
        defaultValue={{ value: 0, label: moment().format('YYYY') }}
      />
    </div>
  );
};

export default AppBody;
