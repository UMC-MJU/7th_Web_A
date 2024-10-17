import { Link } from "react-router-dom";
import List from "./list";
import { FaSearch } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { styled } from 'styled-components';

const Sidebar = () => {

  return (
    <>
      <SidebarWrapper>
        <Link to={'/search'}><FaSearch/><List listText={"찾기"}/></Link>
      <Link to={'/moviecategory'}><BiSolidMoviePlay /><List listText={"영화"}/></Link>
      </SidebarWrapper>
      
    </>
  )
}

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

export default Sidebar;