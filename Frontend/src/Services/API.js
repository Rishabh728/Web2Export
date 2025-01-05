// api.js
import axios from "axios";
import AuthService from "./authService";

// Create an Axios instance
const API = axios.create({
  baseURL: "http://localhost:5000", // Add http:// for proper URL formatting
});

// Add a request interceptor to include the JWT token
API.interceptors.request.use(
  (config) => {
    const token = AuthService.getAccessToken(); // Retrieve the JWT token from AuthService
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to the Authorization header
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Optional: Add a response interceptor for handling specific error scenarios
API.interceptors.response.use(
  (response) => response, // Pass through successful responses
  async (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - Redirecting to login");
      AuthService.clearTokens(); // Clear the token
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;
