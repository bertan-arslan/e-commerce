import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 5000,
});

export default axiosInstance;
