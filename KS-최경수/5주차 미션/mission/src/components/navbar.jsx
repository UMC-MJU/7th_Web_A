import { Link } from "react-router-dom";
import Button from "./button";
import { styled } from 'styled-components';

const Navbar = () => {

  return (
    <>
      <NavbarWrapper>
        <Link to={'/'}>YONGCHA</Link>
        <div>
          <Link to={'/login'}>로그인</Link>
          <Link to={'/singup'}><Button buttonText={"회원가입"} /></Link>
        </div>
      </NavbarWrapper>
    </>
  )
}

export default Navbar;

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
