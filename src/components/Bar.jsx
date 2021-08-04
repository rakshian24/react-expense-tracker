import React from 'react';

const Bar = ({ label, fill }) => {
  return (
    <div className="bar-container">
      <div className="bar">
        <div className="unspent" />
        <div className="spent" />
      </div>
      <div className="bar-label">{label}</div>
    </div>
  );
};

export default Bar;
