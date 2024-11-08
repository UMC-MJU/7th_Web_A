import { Link } from "react-router-dom";
import Button from "./button";
import { styled } from 'styled-components';
import { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";

const Navbar = () => {
  const {login, isLogin} = useContext(LoginContext);

  // 웹 접속시 accessToken이 있을 경우, login = true
  // useEffect(() => {
  //   isLogin(!!localStorage.getItem("accessToken"));
  // }, [])

  console.log(login);

  return (
    <>
      <NavbarWrapper>
        <Link to={'/'}>YONGCHA</Link>
        <div>
          {/* 로그인 됬을때 */}
          {login &&(
            <div>테스트</div>
          )}
          {/* 로그인 안됬을때 */}
          {!login &&(
            <>
              <Link to={'/login'}>로그인</Link>
              <Link to={'/singup'}><Button buttonText={"회원가입"} /></Link>
            </>
          )}

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
