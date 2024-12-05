import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { styled } from 'styled-components';
import "../../../../0-공통/color.css";


const RootLayout = () => {
  return (
    <>
    <Navbar />
    <FrameContainer>
        <Sidebar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </FrameContainer>
    </>
  )
}

export default RootLayout;

// Container Styling
const FrameContainer = styled.div`
    display: flex;
`

// Outlet Styling
const ContentWrapper = styled.main`
    width: 100%;
    padding: 22px;
    background-color: var(--w3-background);
`