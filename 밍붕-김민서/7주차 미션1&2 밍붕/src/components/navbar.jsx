import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/watcha.png';
import Button from './button';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            setIsLoggedIn(true);

            // 유효한 토큰으로 유저 정보 요청
            fetchUserInfo(accessToken);
        } else {
            setIsLoggedIn(false); // accessToken이 없으면 로그인 상태가 아님
        }
    }, []);

    const fetchUserInfo = async (accessToken) => {
        try {
            const response = await fetch('http://localhost:3000/user/me', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUserEmail(data.email); // 유저 정보에서 이메일을 상태에 저장
            } else {
                throw new Error('유저 정보를 불러오는데 실패했습니다.');
            }
        } catch (error) {
            console.error(error);
            alert('유저 정보를 불러오는데 문제가 발생했습니다.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('email');
        setIsLoggedIn(false);
        setUserEmail('');
        alert('로그아웃 되었습니다');
        navigate('/'); // 로그아웃 후 메인 페이지로 리디렉션
    };

    return (
        <NavStyle>
            <Link to={'/'}>
                <MainLogo src={logo} alt="로고" />
            </Link>
            <ButtonContainer>
                {isLoggedIn ? (
                    <>
                        <p style={{ color: 'white', marginLeft: '10px' }}>{userEmail}님 반갑습니다</p>
                        <Button width={'100px'} height={`40px`} color={'#808080'} onClick={handleLogout}>
                            로그아웃
                        </Button>
                    </>
                ) : (
                    <>
                        <Link to={'/login'}>
                            <Button height={`40px`} color={'black'}>
                                로그인
                            </Button>
                        </Link>
                        <Link to={`/signup`}>
                            <Button color="#EF007E" height={`40px`}>
                                회원가입
                            </Button>
                        </Link>
                    </>
                )}
            </ButtonContainer>
        </NavStyle>
    );
};

export default Navbar;

const NavStyle = styled.nav`
    display: grid;
    position: sticky;
    top: 0;
    padding-left: 20px;
    padding-right: 20px;
    grid-template-areas: 'logo ㆍ ㆍ ㆍ ㆍ ㆍ ㆍ ㆍ ㆍ button';
    grid-template-columns: repeat(10, 1fr);
    justify-content: space-between;
    grid-area: nav;
    width: 100%;
    height: 100%;
    background-color: #1b1b1b;
    z-index: 100;
`;

const MainLogo = styled.img`
    grid-area: logo;
    width: 200px;
    height: auto;
`;

const ButtonContainer = styled.div`
    grid-area: button;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
`;

