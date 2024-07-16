import { useEffect, useState } from 'react';

import { ROOM_LIST_URL } from 'constant/paths';
import twService from 'utils/services';

const useGetRoom = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await twService.get(ROOM_LIST_URL);
        setData(response?.data?.data || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useGetRoom;
