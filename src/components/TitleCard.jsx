import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import CirclePlusBtn from './CirclePlusBtn';
import CustomButton from './CustomButton';

const TitleCard = ({ title }) => {
  const { width } = useWindowSize();
  console.log('WIDTH = ', width);

  return (
    <div className="title-card">
      <div className="title">{title}</div>
      {width > 480 ? (
        <div>
          <CustomButton title="Add New Expense" type="btn-primary" />
        </div>
      ) : (
        <div>
          <CirclePlusBtn type="btn-circle" />
        </div>
      )}
    </div>
  );
};

export default TitleCard;
