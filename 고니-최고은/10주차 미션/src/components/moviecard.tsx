tsx;

import React from "react";
import styled from "styled-components";

// 스타일 컴포넌트 정의
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

// MovieCard의 props 타입 정의
interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
}

interface MovieCardProps {
  movie: Movie;
  onClick: () => void; // 클릭 이벤트 핸들러 타입
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const posterUrl = `${movie.poster_path}`;
  return (
    <CardContainer onClick={onClick}>
      <CardImage src={posterUrl} alt={movie.title} />
      <CardContent>
        <CardLabel>{movie.title}</CardLabel>
        <ReleaseDate>{movie.release_date}</ReleaseDate>
      </CardContent>
    </CardContainer>
  );
};

export default MovieCard;
