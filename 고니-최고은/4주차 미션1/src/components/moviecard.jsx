import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 200px; /* 카드 너비 */
    border-radius: 10px;
    overflow: hidden;
`;

const CardImage = styled.img`
    width: 100%;
    height: 300px; /* 고정된 높이 설정 */
`;

const CardContent = styled.div`
    padding: 2px;
`;

const CardLabel = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

const ReleaseDate = styled.div`
    font-size: 12px;
    font-weight: bold;

`;

const MovieCard = ({ movie, onClick }) => {
    return (
        <CardContainer onClick={onClick}>
            <CardImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <CardContent>
                <CardLabel>{movie.title}</CardLabel>
                <ReleaseDate>{movie.release_date}</ReleaseDate>
            </CardContent>
        </CardContainer>
    );
};

export default MovieCard;