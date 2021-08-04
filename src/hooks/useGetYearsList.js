import { useEffect, useState } from 'react';
import { getYearsList } from '../helper/functions';
import { YEARS_LIMIT } from '../constant';

const useGetYearsList = () => {
  const [yearsList, setYearsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setYearsList(getYearsList(YEARS_LIMIT));
  }, []);

  useEffect(() => {
    if (yearsList.length > 0) {
      setLoading(false);
    }
  }, [yearsList]);

  return [loading, yearsList];
};

export default useGetYearsList;
