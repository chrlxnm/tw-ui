import { useEffect, useState } from "react";

import { ON_GOING_URL } from "constant/paths";
import twService from "utils/services";

const useGetHistory = (params) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await twService.get(
          `user/${
            params?.section === "class" ? "schedules" : "rooms"
          }/bookings`
        );
        setData(response?.data || []);
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

export default useGetHistory;
