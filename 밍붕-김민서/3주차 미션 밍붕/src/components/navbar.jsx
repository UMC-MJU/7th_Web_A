// navbar.jsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/watcha.png';
import Button from './button';
const Navbar = () => {
    return (
        <NavStyle>
            <Link to={'/'}>
                <MainLogo src={logo} alt="로고" />
            </Link>
            <ButtonContainer>
                <Link to={'/login'}>
                    <Button>로그인</Button>
                </Link>
                <Link to={`/signup`}>
                    <Button color="#EF007E">회원가입</Button>
                </Link>
            </ButtonContainer>
        </NavStyle>
    );
};

export default Navbar;

const NavStyle = styled.nav`
    display: grid;
    padding-left: 20px;
    padding-right: 20px;
    grid-template-areas: 'logo ㆍ ㆍ ㆍ ㆍ ㆍ ㆍ ㆍ ㆍ button';
    grid-template-columns: repeat(10, 1fr);
    justify-content: space-between;
    grid-area: nav;
    width: 100%;
    height: 100%;
    background-color: #1b1b1b;
`;

const MainLogo = styled.img`
    grid-area: logo;
    width: 100%;
    height: 100%;
`;

const ButtonContainer = styled.div`
    grid-area: button;
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    align-items: center;
`;
