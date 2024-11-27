import axios from "axios";

const token = localStorage.getItem("accessToken");

const userInstance = axios.create({
  headers :{
    Authorization:`Bearer ${token}`
  },
  baseURL : import.meta.env.VITE_USER_API_URL
});

userInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${token}` || '';
  return config;
})

export {userInstance}