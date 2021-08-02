import React from 'react';

const CustomButton = ({ title, type }) => {
  return <button className={`btn ${type}`}>{title}</button>;
};

export default CustomButton;
