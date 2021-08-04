import React from 'react';

const CalenderCard = ({date, month, year}) => {
  return (
    <div className="calender-card">
      <div className="month-date">
        <div className="month">{month}</div>
        <div className="year">{year}</div>
      </div>      
      <div className="date">{date}</div>
    </div>
  );
};

export default CalenderCard;
