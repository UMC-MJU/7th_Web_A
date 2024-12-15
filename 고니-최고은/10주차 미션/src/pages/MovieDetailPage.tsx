import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetMovieDetails } from "../queries/useGetMovieDetails";
import { useGetMovieCredits } from "../queries/useGetMovieCredits";

// 스타일 컴포넌트 정의
const Container = styled.div`
  padding: 20px;
  color: white;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Overview = styled.p`
  margin-top: 10px;
`;

const ReleaseDate = styled.p`
  margin-top: 5px;
`;

const Rating = styled.p`
  margin-top: 5px;
`;

const CreditsContainer = styled.div`
  margin-top: 20px;
`;

const CastList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CastItem = styled.div`
  width: 100px;
  text-align: center;
`;

const CastImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

interface MovieParams {
  movieId: string; // useParams에서 가져올 movieId의 타입
}

const MovieDetailPage: React.FC = () => {
  const { movieId } = useParams<MovieParams>();
  const apiKey = import.meta.env.VITE_TMDB_TOKEN;

  // 영화 상세 정보 가져오기
  const {
    data: details,
    isLoading: loadingDetails,
    isError: errorDetails,
  } = useGetMovieDetails(movieId, apiKey);

  // 출연진 정보 가져오기
  const {
    data: credits,
    isLoading: loadingCredits,
    isError: errorCredits,
  } = useGetMovieCredits(movieId, apiKey);

  if (loadingDetails || loadingCredits) {
    return <div>로딩 중입니다...</div>;
  }

  if (errorDetails || errorCredits) {
    return <div>영화 정보를 가져오는 데 실패했습니다.</div>;
  }

  console.log("Movie Details:", details);
  console.log("Movie Credits:", credits);

  return (
    <Container>
      {details && (
        <>
          <Title>{details.title}</Title>
          <Rating>평균 평점: {details.vote_average}</Rating>
          <ReleaseDate>개봉일: {details.release_date}</ReleaseDate>
          <Overview>{details.overview}</Overview>
        </>
      )}
      <CreditsContainer>
        <h2>출연진</h2>
        {credits &&
        credits.cast &&
        Array.isArray(credits.cast) &&
        credits.cast.length > 0 ? (
          <CastList>
            {credits.cast.map((cast) => (
              <CastItem key={cast.id}>
                <CastImage
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt={cast.name}
                />
                <p>{cast.name}</p>
                <p>{cast.character}</p>
              </CastItem>
            ))}
          </CastList>
        ) : (
          <p>출연진 정보가 없습니다.</p> // 출연진이 없을 경우 메시지 표시
        )}
      </CreditsContainer>
    </Container>
  );
};

export default MovieDetailPage;
