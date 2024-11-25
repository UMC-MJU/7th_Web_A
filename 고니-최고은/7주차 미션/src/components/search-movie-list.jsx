import * as S from '../style/search.style';
import useCustomFetch from '../hooks/useCustomFetch';
import MovieCard from '../components/moviecard';
import { useSearchParams } from 'react-router-dom';
import CardSkeleton from './card-skeleton';
import CardListSkeleton from './card-list-skeleton';

const SearchMovieList = () => {
    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
    });
    const mq = searchParams.get('mq');

    const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`

    const {data: movies, isLoading, isError} = useCustomFetch(url);
    console.log(movies);

    if (isError) {
        return <h1 style={{color:'white'}}>에러 발생</h1>
    }

    if (isLoading) {
        return (
            <S.MovieGridContainer>
                <CardListSkeleton number={20}/>
            </S.MovieGridContainer>
        )
    }

    if (mq && Array.isArray(movies) && movies.length === 0) {
        return (
            <div style={{textAlign: 'center', marginTop: '30px'}}>
                <h1 style={{color: 'white'}}>해당하는 검색어 {mq}에</h1>
                <h1 style={{color: 'white'}}>해당하는 데이터가 없습니다.</h1>
            </div>
        )
    }

    else if (Array.isArray(movies) && movies.length > 0) {
        return (
            <S.MovieGridContainer>
                {movies.map((movie) => (
                    <MovieCard 
                        key={movie.id} 
                        movie={movie} 
                        onClick={() => handleMovieClick(movie.id)} // 클릭 이벤트 추가
                    />
                ))}
            </S.MovieGridContainer>
        );
    };
};

export default SearchMovieList;