import './App.css'
import { useState } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SearchPage from "./pages/SearchPage";
import RootLayout from "./layout/root-layout";
import MoviesPage from './pages/MoviesPage';
import MovieDetailPage from './pages/MovieDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // RootLayout을 최상위 요소로 설정
    children: [
      {
        path: 'login',
        element: <LoginPage />, // 로그인 페이지
      },
      {
        path: 'signup',
        element: <SignupPage />, // 회원가입 페이지
      },
      {
        path: 'search',
        element: <SearchPage />, // 검색 페이지
      },
      {
        path: 'movies',
        element: <MoviesPage />, // 영화 페이지
      },
      {
        path: 'movies/:movieId', // 영화 상세 페이지 경로
        element: <MovieDetailPage />, 
      },
    ],
  },
]);

function App() {
  const [nickname, setNickname] = useState('');
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App
