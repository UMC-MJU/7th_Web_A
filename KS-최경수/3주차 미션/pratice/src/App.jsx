import { useState } from 'react'
import CustomButton from './components/custom-button' // Styled-Components
import {createBrowserRouter, RouterProvider} from "react-router-dom"; // React Router
import HomePage from './pages/home';
import NotFound from './pages/not-found';
import Movies from './pages/movies';
import RootLayout from './layout/root-layout';
import './App.css'

const router = createBrowserRouter([  
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'movies/:movieId',
        element: <Movies />
      }
    ]
  }
])

function App() {
  return (
    <>
    
    {/* Styled-Components 실습 */}
    {/* <CustomButton /> */}

    {/* React Router 실습 */}
    <RouterProvider router={router} />
    
    </>
  )
}

export default App
