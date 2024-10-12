import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilm } from 'react-icons/fa';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 250px; /* 사이드바 너비 */
    background-color: rgb(26, 26, 26); /* 사이드바 배경색 */
    padding: 20px;
`;

const SidebarItem = styled(Link)`
    display: flex;
    align-items: center;
    padding: 10px;
    color: white;
    text-decoration: none;
    margin: 5px 0;
    transition: background-color 0.3s;
    svg {
        margin-right: 10px; /* 아이콘과 텍스트 간격 */
    }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarItem to="/search">
                <FaSearch /> 찾기
            </SidebarItem>
            <SidebarItem to="/movies">
                <FaFilm /> 영화
            </SidebarItem>
        </SidebarContainer>
    );
};

export default Sidebar;