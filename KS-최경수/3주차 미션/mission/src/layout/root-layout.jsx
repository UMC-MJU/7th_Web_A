import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { styled } from 'styled-components';
import "../../../../0-공통/color.css";

const RootLayout = () => {

  return (
    <>
    <NavbarWrapper>
      <Navbar />
    </NavbarWrapper>

    <FrameContainer>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </FrameContainer>
    </>
  )
}

export default RootLayout;


// Navbar Styling
const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--w3-barbackground);
  padding: 0 29px;
  height : 88px;


  a {
     color: var(--w3-fontColor);
     text-decoration: none;
  }

  > a:first-child{
    font-size: 28px;
    font-weight: 900;
    color: var(--w3-logoColor);
  }
  
  div > a:first-child{
    margin-right: 28px;
  }
`

// Sidebar Styling
const SidebarWrapper = styled.nav`
  width: 270px;
  height: 100vh;
  background-color: var(--w3-barbackground);

    a {
     color: var(--w3-fontColor);
     text-decoration: none;
     display: flex;
     align-items: center;
     box-sizing: content-box;
     padding-left: 19px;
     height: 47px;
  }
`

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