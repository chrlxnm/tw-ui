import { createContext, useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

// Create a context to manage loading state
const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

const axiosInstance = axios.create({
  baseURL: 'https://api.employeecornertelkom.com', // Replace with your API base URL
});

const excludedUrls = ['/login', '/signup']; // Add URLs to exclude from loading indicator

axiosInstance.interceptors.request.use(
  (config) => {
    const { setLoading } = useLoading();
    if (!excludedUrls.includes(config.url)) {
      setLoading(true);
    }
    return config;
  },
  (error) => {
    const { setLoading } = useLoading();
    setLoading(false);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const { setLoading } = useLoading();
    setLoading(false);
    return response;
  },
  (error) => {
    const { setLoading } = useLoading();
    setLoading(false);
    if (error.response && error.response.status === 401) {
      // Handle logout
      const history = useHistory();
      // Perform logout operation (e.g., clear tokens)
      // Redirect to login page
      history.push('/login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
