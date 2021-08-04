import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import Amount from './Amount';
import CalenderCard from './CalenderCard';

const ExpenseCard = props => {
  const { width } = useWindowSize();
  return (
    <>
      {width > 410 ? (
        <div className="expense-card">
          <CalenderCard {...props} />
          <div className="item">{props.item}</div>
          <Amount amount={props.amount} />
        </div>
      ) : (
        <div className="xs-expense-card">
          <div className="date-container">
            <CalenderCard {...props} />
            <Amount amount={props.amount} />
          </div>
          <div className="item">{props.item}</div>
        </div>
      )}
    </>
  );
};

export default ExpenseCard;
