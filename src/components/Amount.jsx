import React from 'react';
import { BiRupee } from 'react-icons/bi';

const AmountBtn = ({ amount }) => {
  return (
    <div className="amount">
      <BiRupee /> {amount}
    </div>
  );
};

export default AmountBtn;
