import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../pages/root-layout';
import Home from '../pages/home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
