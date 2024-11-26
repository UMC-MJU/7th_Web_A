import { Link } from "react-router-dom";
import Button from "./button";
import { styled } from 'styled-components';
import { useContext, useEffect, useState } from "react";
import { userInstance } from "../apis/axios-user";
import { LoginContext } from "../context/LoginContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useGetUserInfo } from "../hooks/queries/useGetUserInfo";

const Navbar = () => {
  const { login, isLogin } = useContext(LoginContext);
  const [nick, setNick] = useState(''); 
  const {data: user, isPending, isLoading, isError} = useQuery({
    enabled: !!localStorage.getItem("accessToken"),
    queryFn: () => useGetUserInfo({url : '/user/me'}),
    queryKey: ['userInfo'],
    cacheTime: 100000,
  });


  useEffect(() => {
    if (!!localStorage.getItem("accessToken") && user) {
      setNick(user?.data.email.split('@')[0]);
      isLogin(true);
    }
  }, [login, user])

 


  const delteToken = () => {
    alert('로그아웃 되었습니다!');
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    isLogin(false)
  }


  return (
    <>
      <NavbarWrapper>
        <Link to={'/'}>YONGCHA</Link>
        <div>
          {/* 로그인 됬을때 */}
          {login && (
            <>
              <Nick>{nick}님 반갑습니다.</Nick>
              <Logout onClick={() => {delteToken()}}>로그아웃</Logout>
            </>

          )}
          {/* 로그인 안됬을때 */}
          {!login && (
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
  color: var(--w3-fontColor);

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
const Nick = styled.span`
  margin-right: 20px;
  font-weight: bold;
`

const Logout = styled.span`
  cursor: pointer
`


