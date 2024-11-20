import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { cbr, ninja, r1, rocket } from '../assets';

const Category = () => {
    return (
        <>
            <TextStyle>카테고리</TextStyle>;
            <CategoryContainer>
                <Link to="/category/popular">
                    <ImgTile>
                        <NameTag>인기있는</NameTag>
                        <StyledImg src={ninja}></StyledImg>
                    </ImgTile>
                </Link>
                <Link to="/category/now_playing">
                    <ImgTile>
                        <NameTag>지금 상영중인</NameTag>
                        <StyledImg src={cbr}></StyledImg>
                    </ImgTile>
                </Link>
                <Link to="/category/upcoming">
                    <ImgTile>
                        <NameTag>개봉 예정</NameTag>
                        <StyledImg src={r1}></StyledImg>
                    </ImgTile>
                </Link>
                <Link to="/category/top_rated">
                    <ImgTile>
                        <NameTag>높은 평가를 받은</NameTag>
                        <StyledImg src={rocket}></StyledImg>
                    </ImgTile>
                </Link>
            </CategoryContainer>
        </>
    );
};

export default Category;

const TextStyle = styled.h1`
    color: white;
`;

const CategoryContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ImgTile = styled.div`
    width: 350px;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    margin: 10px;
`;

const NameTag = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    width: auto;
    height: 20%;
    font-size: 20px;
    padding: 10px;
    background-color: #1b1b1b;
    border-radius: 20px;
    color: white;
`;
