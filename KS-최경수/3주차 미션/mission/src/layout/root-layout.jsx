import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
const RootLayout = () => {

  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  )
}

export default RootLayout;