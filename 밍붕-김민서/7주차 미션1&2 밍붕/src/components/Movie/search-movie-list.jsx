import styled from 'styled-components';
import useCustomFetch from '../../hooks/useCustomFetch';
import { Link, useSearchParams } from 'react-router-dom';
import Skeleton from '../skeleton';
import CardListSkeleton from '../card-list-skeleton';

const SearchMovieList = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        mq: '',
    });
    const mq = searchParams.get('mq');
    const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;
    const { data: movies, isLoading, isError } = useCustomFetch(url);
    if (mq && movies.data?.results.length === 0) {
        return (
            <Message>
                <h1>해당하는 검색어 {mq}</h1>에<h1>해당하는 데이터가 없습니다.</h1>
            </Message>
        );
    }

    if (isLoading) {
        return (
            <MovieGridContainer>
                <CardListSkeleton number={30} />
            </MovieGridContainer>
        );
    }
    return (
        <MovieGridContainer>
            {movies.data?.results.map((movie) => (
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
            ))}
        </MovieGridContainer>
    );
};

export default SearchMovieList;

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

const MovieGridContainer = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 20px;
`;

const Message = styled.div`
    text-align: center;
    margin-top: 30px;
    color: white;
`;
