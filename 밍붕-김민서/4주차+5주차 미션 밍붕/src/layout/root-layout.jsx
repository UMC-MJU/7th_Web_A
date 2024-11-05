import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar.jsx';
import styled from 'styled-components';
import Sidebar from '../components/sidebar.jsx';

const RootLayout = () => {
    return (
        <Root>
            <Navbar />
            <Sidebar />
            <Main>
                <Outlet />
            </Main>
        </Root>
    );
};

export default RootLayout;

const Root = styled.div`
    display: grid;
    grid-template-areas:
        'nav nav nav nav nav nav nav nav nav nav '
        'aside main main main main main main main main main'
        'aside main main main main main main main main main';
    height: 100vh;
    grid-template-columns: repeat(10,1fr);
    grid-template-rows: 100px repeat(3, auto);
    min-height: 100vh;
    width: 100%;
    background-color: black;
    overflow: auto; 
`;

const Main = styled.main`
    grid-area: main;
    justify-items: center;
    align-items: center;
    padding: 20px;
`;
