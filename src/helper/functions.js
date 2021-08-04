import moment from 'moment';

export const getYearsList = (lastLimit) => {
  let yearsList = [];
  for (let i = 0; i < lastLimit; i++) {
    yearsList[i] = {
      value: i,
      label: moment().format('YYYY') - i,
    };
  }
  return yearsList;
};
