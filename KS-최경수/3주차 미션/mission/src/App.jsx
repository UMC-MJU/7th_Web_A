import './App.css'
import { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Page Connection
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/sing-up';
import Search from './pages/search';
import NotFound from './pages/not-found';
import RootLayout from './layout/root-layout';

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
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
