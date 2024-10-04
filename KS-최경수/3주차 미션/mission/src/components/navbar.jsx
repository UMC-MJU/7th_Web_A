import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
    <nav>
      <Link to={'/'}>메인 홈</Link>
      <Link to={'/login'}>로그인</Link>
      <Link to={'/singup'}>회원가입</Link>
    </nav>
    </>
  )
}

export default Navbar;