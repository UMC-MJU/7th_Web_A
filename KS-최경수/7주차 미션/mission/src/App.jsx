import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { LoginContextProvider } from './context/LoginContext';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Page Connection
const Home = React.lazy(() => import("./pages/home"));
const Login = React.lazy(() => import("./pages/login"));
const SignUp = React.lazy(() => import("./pages/sing-up"));
const Search = React.lazy(() => import("./pages/search"));
const NowPlaying = React.lazy(() => import("./pages/now-playing"));
const Popluar = React.lazy(() => import("./pages/popular"));
const TopRated = React.lazy(() => import("./pages/top-rated"));
const UpComing = React.lazy(() => import("./pages/upcoming"));
const MovieCategory = React.lazy(() => import("./pages/moviecategory"));
const MovieDetail = React.lazy(() => import("./pages/moviedetail"));
const NotFound = React.lazy(() => import("./pages/not-found"));
const RootLayout = React.lazy(() => import("./layout/root-layout"));

// Component
import Loading from './pages/loading';

const queryClient = new QueryClient()

function App() {
  // Router Connect
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'singup',
          element: <SignUp />
        },
        {
          path: 'search',
          element: <Search />
        },
        {
          path: 'moviecategory',
          element: <MovieCategory />
        },
        {
          path: 'movies/:movieId',
          element: <MovieDetail />
        },
        {
          path: 'movies/top-rated',
          element: <TopRated />
        },
        {
          path: 'movies/up-coming',
          element: <UpComing />
        },
        {
          path: 'movies/now-playing',
          element: <NowPlaying />
        },
        {
          path: 'movies/popular',
          element: <Popluar />
        },
      ]
    },
  ]);


  return (
    <Suspense fallback={<Loading />}>
      <LoginContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </LoginContextProvider>
    </Suspense>

  )
}

export default App
