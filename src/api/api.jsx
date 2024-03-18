import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/login", // your API base URL
  timeout: 5000, // request timeout
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // This might not be needed in some cases
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Handle unauthorized errors
    } else if (error.response && error.response.status === 403) {
      // Handle forbidden errors
    } else if (error.response && error.response.status === 404) {
      // Handle not found errors
    } else {
      // Handle other errors
    }
    return Promise.reject(error);
  }
);

export default api;
