import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from '../pages/root-layout';
import Home from '../pages/home';
import HomeDetail from '../pages/homeDetail';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'todo/:todosId',
          element: <HomeDetail />
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
