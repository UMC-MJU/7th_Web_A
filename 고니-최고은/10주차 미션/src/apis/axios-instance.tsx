import axios, { AxiosInstance } from "axios";

// Axios 인스턴스 생성
const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`, // Bearer 토큰 설정
  },
  baseURL: import.meta.env.VITE_MOVIE_API_URL, // 기본 URL 설정
});

export { axiosInstance };
