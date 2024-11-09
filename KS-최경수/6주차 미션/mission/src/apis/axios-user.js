import axios from "axios";

const userInsatance = axios.create({
  headers :{
    Authorization:`Bearer ${localStorage.getItem("accessToken")}`
  },
  baseURL : import.meta.env.VITE_USER_API_URL
})

export {userInsatance}