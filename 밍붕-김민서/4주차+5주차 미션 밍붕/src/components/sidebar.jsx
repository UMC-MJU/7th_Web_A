    // Sidebar.jsx
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
                        <h4>찾기</h4>
                    </SideMenu>
                </Link>
                <Link to={'/category'}>
                    <SideMenu>
                        <MdMovie />
                        <h4 >영화</h4>
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
        position: fixed; /* 고정된 위치 유지 */
        top : 100px;
        left : 0px;
        grid-area: aside;
        width : 10%;
        min-width: 70px;
        min-height: 100vh;
        background-color: #1b1b1b;
        padding: 20px;
    `;

    const SideMenu = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        height: 50px;
        color: white;
        white-space: nowrap;
    `;
