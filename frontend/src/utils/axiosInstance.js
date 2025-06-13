// utils/axiosInstance.js
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL || "https://e-commerce-fpf4.onrender.com/api/products";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
