import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetMovies } from '../hooks/queries/useGetMovie';
import { useQuery } from '@tanstack/react-query';
import { useGetInfiniteMovies } from '../hooks/useGetInfiniteMovies';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import CardListSkeleton from '../components/card-list-skeleton';

const MoviesPage = () => {
    const { id: paramId } = useParams();
    const id = paramId || 'popular';
    // const {
    //     data: movies,
    //     isPending, //데이터를 불러오는 중입니다
    //     isLoading, //데이터를 불러오는 중 이거나 재시도 중입니다
    //     isError,
    // } = useQuery({
    //     //왜 화살표 함수 형식으로 호출해야하는가?
    //     queryFn: () => useGetMovies({ category: id, pageParam: 1 }),
    //     queryKey: ['movies', id],
    //     gcTime: 10000,
    //     staleTime: 10000,
    // });

    const {
        data: movies,
        isLoading,
        isFetching,
        hasNextPage,
        isPending,
        fetchNextPage,
        isFetchingNextPage,
        error,
        isError,
    } = useGetInfiniteMovies(id);

    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            !isFetching && hasNextPage && fetchNextPage();
        }
    }, [inView, isFetching, hasNextPage, fetchNextPage]);
    if (isPending) {
        return <h1 style={{ color: `white` }}>로딩중 입니다</h1>;
    }

    if (isError) {
        return <h1 style={{ color: `white` }}>에러 입니다</h1>;
    }

    return (
        <>
            <Container>
                {movies.pages.map((page) =>
                    page.results.map((movie, _) => {
                        return (
                            <MovieCard key={movie.id}>
                                <Link to={`/movies/${movie.id}`}>
                                    <StyledImg
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // src 속성 수정
                                        alt={movie.title}
                                    />
                                </Link>
                                <StyledLink bold="true">{movie.title}</StyledLink>
                                <StyledLink>{movie.release_date}</StyledLink>
                            </MovieCard>
                        );
                    })
                )}
                {isFetching && <CardListSkeleton number={20} />}
            </Container>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', width: '100%' }} ref={ref}>
                {!isFetching && <ClipLoader color={'#FFF'} />}
            </div>
        </>
    );
};

export default MoviesPage;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
`;

const StyledImg = styled.img`
    margin: 2px;
    width: 150px;
    height: 240px;
    border-radius: 30px;
    &:hover {
        filter: brightness(0.5);
    }
`;

const StyledLink = styled.span`
    /* <a> 대신 <span> 사용 */
    color: #fff;
    font-size: 16px;
    font-weight: ${(props) => (props.bold === 'true' ? 'bold' : 'normal')};

    &:hover {
        color: #f0e68c;
    }
`;

const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    margin: 17.5px;
`;
