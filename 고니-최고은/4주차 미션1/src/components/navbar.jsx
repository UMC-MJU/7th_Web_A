import {Link} from "react-router-dom";
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: rgb(26, 26, 26); /* 네비게이션 바 배경색 */
`;

const Logo = styled(Link)`
    font-size: 24px;
    color: rgb(220, 20, 60);
    font-weight: bold;
    text-decoration: none;
`;

const Button = styled(Link)`
    padding: 8px 13px;
    margin-left: 10px;
    color: white;
    background-color: transparent;
    border: none;
    text-decoration: none;
`;

const SignupButton = styled(Button)`
    background-color: rgb(220, 20, 60);
    border-radius: 10px;
    
    &:hover {
        background-color: #0056b3; /* hover 시 색상 변경 */
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo to="/">YONGCHA</Logo>
            <div>
                <Button to="/login">로그인</Button>
                <SignupButton to="/signup">회원가입</SignupButton>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;