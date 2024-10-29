import {useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components';
import image1 from '../images/green.jpg';
import image2 from '../images/pink.jpg';
import image3 from '../images/black.jpg';
import image4 from '../images/blue.jpg';
import MovieCard from '../components/moviecard';

const MoviesContainer = styled.div`
    padding: 5px;
`;

const CategoryTitle = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* 카드 간격 */
`;

const CategoryCard = styled.div`
    width: 280px; /* 카드 너비 */
    height: 110px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`;

const CategoryImage = styled.img`
    width: 100%;
    height: auto;
`;

const CategoryLabel = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
`;

const CardList = styled.div` /* CardList 스타일 정의 */
    margin-top: 10px; /* 카드 리스트 여백 */
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    gap: 30px; /* 카드 간격 */
`;

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [showCategories, setShowCategories] = useState(true);

    const categories = [
        { id: 1, name: "현재 상영중인", image: image1, endpoint: "/movie/now_playing"},
        { id: 2, name: "인기있는", image: image2, endpoint: "/movie/popular"},
        { id: 3, name: "높은 평가를 받은", image: image3, endpoint: "/movie/top_rated"},
        { id: 4, name: "개봉 예정중인", image: image4, endpoint: "/movie/upcoming"},
    ];

    const fetchMovies = async (endpoint) => {
        const movies = await axios.get(`https://api.themoviedb.org/3${endpoint}?language=ko-KR&page=1`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOGQ0ZGFlNWU3MWFhMjg2Mzc3ZmFjMzRiNjBhNDA5ZCIsIm5iZiI6MTcyODcxMzc1MS4zMDU0OTEsInN1YiI6IjY3MDM5ZWU0M2Q3YjNjNmMwNzc5NGUyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vo-9P1lQjW__hZM-ByKzWjcVUFIC-ZxS8g_S3LPHPNY`
            }
        });
        setMovies(movies.data.results);
        setShowCategories(false);
    }

    const handleCategoryClick = (endpoint) => {
        fetchMovies(endpoint);
    };

    return (
        <MoviesContainer>
            {showCategories && (
                <>
                    <CategoryTitle>카테고리</CategoryTitle>
                    <CategoryContainer>
                        {categories.map(category => (
                            <CategoryCard key={category.id} onClick={() => handleCategoryClick(category.endpoint)}>
                                <CategoryImage src={category.image} alt={category.name} />
                                <CategoryLabel>{category.name}</CategoryLabel>
                            </CategoryCard>
                        ))}
                    </CategoryContainer>
                </>
            )}
            {/* 카테고리 숨긴 후에만 영화 카드 리스트 표시 */}
            {!showCategories && (
                <CardList>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </CardList>
            )}
        </MoviesContainer>
    );
};

export default MoviesPage;