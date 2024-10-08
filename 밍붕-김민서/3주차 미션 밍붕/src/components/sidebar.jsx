import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { MdMovie } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <SidebarStyle>
            <Link to={`/search`}>
                <SideMenu>
                    <FaSearch />
                    &nbsp; 찾기
                </SideMenu>
            </Link>
            <Link to={'/category'}>
                <SideMenu>
                    <MdMovie />
                    &nbsp; 영화
                </SideMenu>
            </Link>
        </SidebarStyle>
    );
};

export default Sidebar;

const SidebarStyle = styled.aside`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    grid-area: aside;
    width: 100%;
    height: 100vh;
    min-height: 100%;
    background-color: #1b1b1b;
    padding: 20px;
`;

const SideMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    color: white;
`;
