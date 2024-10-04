import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <>
    <nav>
      <Link to={'/search'}>검색</Link>
    </nav>
    </>
  )
}

export default Sidebar;