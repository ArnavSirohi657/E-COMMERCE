// utils/axiosInstance.js
import axios from "axios";

// Only the domain here — NO /api/products
const baseURL = import.meta.env.VITE_API_BASE_URL || "https://e-commerce-fpf4.onrender.com";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
