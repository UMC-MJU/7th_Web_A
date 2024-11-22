import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // 백엔드 서버의 기본 URL
  timeout: 10000, // 요청 타임아웃 (10초)
  headers: {
    'Content-Type': 'application/json', // 기본 헤더 설정
  },
});

export default api;