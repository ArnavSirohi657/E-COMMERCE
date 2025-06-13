// utils/axiosInstance.js
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "https://e-commerce-fpf4.onrender.com/";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Only if you're using cookies or sessions
});

export default axiosInstance;
