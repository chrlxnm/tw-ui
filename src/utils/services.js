import { BASE_URL } from 'constant/paths';
import axios from 'axios';

const appService = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
});

// Request Interceptor
appService.interceptors.request.use(
  config => {
    // Modify the request config here (e.g., add authorization header)
    const token = localStorage.getItem('token'); // Replace with your token retrieval logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response Interceptor
appService.interceptors.response.use(
  response => {
    // Modify the response here (e.g., transform data)
    return response;
  },
  error => {
    // Handle errors (e.g., redirect to login if unauthorized)
    if (error.response && error.response.status === 401) {
      // Redirect to login or handle unauthorized access
      console.log('Unauthorized, logging out...');
      // Add your logout logic here
    }
    return Promise.reject(error);
  }
);

export default appService;