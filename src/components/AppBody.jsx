import moment from 'moment';
import React, { useState } from 'react';
import useGetYearsList from '../hooks/useGetYearsList';
import ExpenseCard from './ExpenseCard';
import ExpenseChart from './ExpenseChart';
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
      <ExpenseChart />
      <ExpenseCard
        date={9}
        month={'January'}
        year={2020}
        item={"Meghana's Birthday"}
        amount={25000}
      />
      <ExpenseCard
        date={23}
        month={'September'}
        year={2020}
        item={
          "Very Long String to Check the Text Overflow's Birthday Very Long String to Check the Text Overflow's Birthday Very Long String to Check the Text Overflow's Birthday Very Long String to Check the Text Overflow's Birthday Very Long String to Check the Text Overflow's Birthday"
        }
        amount={10000000}
      />
      <ExpenseCard
        date={24}
        month={'October'}
        year={2020}
        item={"Raksh's Birthday"}
        amount={10}
      />
      <ExpenseCard
        date={23}
        month={'September'}
        year={2020}
        item={"Bhuvana's Birthday"}
        amount={2500}
      />
      <ExpenseCard
        date={23}
        month={'September'}
        year={2020}
        item={"Bhuvana's Birthday"}
        amount={2500}
      />
    </div>
  );
};

export default AppBody;
