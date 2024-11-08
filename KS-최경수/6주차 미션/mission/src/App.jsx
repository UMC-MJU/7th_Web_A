import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { LoginContextProvider } from './context/LoginContext';

// Page Connection
const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));
const SignUp = React.lazy(() => import("./pages/sing-up"));
const Search = React.lazy(() => import("./pages/search"));
const Movies = React.lazy(() => import("./pages/movie"));
const MovieCategory = React.lazy(() => import("./pages/moviecategory"));
const MovieDetail = React.lazy(() => import("./pages/moviedetail"));
const NotFound = React.lazy(() => import("./pages/not-found"));
const RootLayout = React.lazy(() => import("./layout/root-layout"));

// Component
import Loading from './pages/loading';



function App() {
  // Router Connect
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <NotFound/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path:'login',
          element: <Login/>
        },
        {
          path:'singup',
          element: <SignUp/>
        },
        {
          path:'search',
          element: <Search/>
        },
        {
          path: 'movies/:movieCategory',
          element: <Movies/>
        },
        {
          path: 'movies/movieitem/:movieId',
          element: <MovieDetail/>
        },
        {
          path: 'movies/now-playing/movies/movieitem/:movieId',
          element: <MovieDetail/>
        },
        {
          path: 'movies/popular/movies/movieitem/:movieId',
          element: <MovieDetail/>
        },
        {
          path: 'movies/top-rated/movies/movieitem/:movieId',
          element: <MovieDetail/>
        },
        {
          path: 'movies/up-coming/movies/movieitem/:movieId',
          element: <MovieDetail/>
        },
        {
          path:'moviecategory',
          element: <MovieCategory/>
        }
      ]
    },
  ]);

  return (
    <Suspense fallback={<Loading/>}>
      <LoginContextProvider>
        <RouterProvider router={router} />
      </LoginContextProvider>
    </Suspense>

  )
}

export default App
