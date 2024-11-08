import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

// Page Connection
// import Home from './pages/home';
// import Login from './pages/login';
// import SignUp from './pages/sing-up';
// import Search from './pages/search';
// import Movies from './pages/movie';
// import MovieCategory from './pages/moviecategory';
// import MovieDetail from './pages/moviedetail';
// import NotFound from './pages/not-found';
// import RootLayout from './layout/root-layout';

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
          <RouterProvider router={router} />
    </Suspense>

  )
}

export default App
