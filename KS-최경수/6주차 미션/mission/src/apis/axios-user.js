import axios from "axios";

const token = localStorage.getItem("accessToken");

const userInstance = axios.create({
  headers :{
    Authorization:`Bearer ${token}`
  },
  baseURL : import.meta.env.VITE_USER_API_URL
})


export {userInstance}