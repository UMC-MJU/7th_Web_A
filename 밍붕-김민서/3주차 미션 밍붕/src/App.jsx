import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import NotFound from './pages/not-found.jsx';
import Movies from './pages/movies.jsx';
import RootLayout from './layout/root-layout.jsx';
import Login from './pages/login.jsx';
import SignUp from './pages/signup.jsx';
import Search from './pages/search.jsx';
import Category from './pages/category';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* 박스 모델 설정 */
}
`;

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
                index: true,
                element: <Movies />,
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <SignUp />,
            },

            {
                path: 'search',
                element: <Search />,
            },
            {
                path: 'category',
                element: <Category />,
            },
            {
                path: 'category/:id',
                element: <Movies></Movies>,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <GlobalStyle /> {/* 전역 스타일 적용 */}
            <RouterProvider router={router} />
        </>
    );
}

export default App;
