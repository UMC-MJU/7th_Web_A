import { Link } from "react-router-dom";
import List from "./list";
import { FaSearch } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";

const Sidebar = () => {

  return (
    <>
      <Link to={'/search'}><FaSearch/><List listText={"찾기"}/></Link>
      <Link to={'/movie'}><BiSolidMoviePlay /><List listText={"영화"}/></Link>
    </>
  )
}

export default Sidebar;