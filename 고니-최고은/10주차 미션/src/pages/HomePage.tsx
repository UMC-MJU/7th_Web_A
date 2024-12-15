import React from 'react';
import MovieCard from '../components/moviecard';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

// 스타일 컴포넌트 정의
const HomeContainer = styled.div`
    padding: 20px;
    color: white;
`;

const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    margin: 0 10px;
    background-color: rgb(220, 20, 60); /* 버튼 배경색 */
    color: white; /* 글자 색상 */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    &:disabled {
        background-color: #ccc; /* 비활성화 상태 색상 */
    }
`;

// 영화 응답 타입 정의
interface Movie {
    id: number;
    title: string;
    // 필요한 필드를 추가
}

interface MovieResponse {
    results: Movie[];
    // 필요한 필드를 추가
}

const HomePage: React.FC = () => {
    const [page, setPage] = React.useState<number>(0);
    const apiKey = import.meta.env.VITE_TMDB_TOKEN;

    const fetchMovies = async (page: number): Promise<MovieResponse> => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page + 1}`);
        if (!response.ok) {
            throw new Error('네트워크 응답이 좋지 않습니다.');
        }
        return response.json();
    };

    const { data, isFetching, isError, error, isPreviousData } = useQuery<MovieResponse, Error>({
        queryKey: ['movies', page],
        queryFn: () => fetchMovies(page),
        keepPreviousData: true,
    });

    return (
        <HomeContainer>
            {isFetching && <div>로딩 중...</div>}
            {isError && <div>오류: {error.message}</div>}
            <CardList>
                {data && data.results && data.results.length > 0 ? (
                    data.results.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <div>영화 정보가 없습니다.</div>
                )}
            </CardList>
            <ButtonContainer>
                <Button 
                    onClick={() => setPage(old => Math.max(old - 1, 0))}
                    disabled={page === 0}
                >
                    이전
                </Button>
                <Button 
                    onClick={() => {
                        if (!isPreviousData && data && data.results && data.results.length === 20) {
                            setPage(old => old + 1);
                        }
                    }}
                    disabled={isPreviousData || (data && data.results && data.results.length < 20)}
                >
                    다음
                </Button>
            </ButtonContainer>
        </HomeContainer>
    );
};

export default HomePage;