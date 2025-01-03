import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import styled from 'styled-components';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh; /* 전체 화면 높이 */
`;

const NavbarContainer = styled.div`
    background-color: rgb(26, 26, 26); /* 네비게이션 바 배경색 */
    padding: 10px;
`;

const MainContainer = styled.div`
    display: flex;
    flex: 1; /* 남은 공간을 차지 */
`;

const Content = styled.div`
    flex: 1; /* 남은 공간을 차지 */
    padding: 20px; /* 콘텐츠 여백 */
`;

const RootLayout = () => {
    return (
        <LayoutContainer>
            <NavbarContainer>
                <Navbar />
            </NavbarContainer>
            <MainContainer>
                <Sidebar />
                <Content>
                    <Outlet />
                </Content>
            </MainContainer>
        </LayoutContainer>
    );
};

export default RootLayout;