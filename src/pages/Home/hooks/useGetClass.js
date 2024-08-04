/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

import { CLASS_LIST_URL } from "constant/paths";
import twService from "utils/services";

const useGetClass = (params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
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

  useEffect(() => {
    fetchData();
  }, [params]);

  return { data, error, loading, fetchData };
};

export default useGetClass;
