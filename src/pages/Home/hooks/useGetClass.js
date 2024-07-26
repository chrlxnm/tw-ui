import { useEffect, useState } from "react";

import { CLASS_LIST_URL } from "constant/paths";
import twService from "utils/services";

const useGetClass = (params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await twService.get(CLASS_LIST_URL, {
          params,
        });
        setData(response?.data?.data || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [params]);

  return { data, error, loading };
};

export default useGetClass;
