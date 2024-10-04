import { Link } from "react-router-dom";
import Button from "./button";

const Navbar = () => {

  return (
    <>
      <Link to={'/'}>YONGCHA</Link>
    <div>
      <Link to={'/login'}>로그인</Link>
      <Link to={'/singup'}><Button buttonText={"회원가입"}/></Link>
    </div>

    </>
  )
}

export default Navbar;

