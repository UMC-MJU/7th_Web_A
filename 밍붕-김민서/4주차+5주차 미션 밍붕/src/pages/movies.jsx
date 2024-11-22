import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../hooks/useCustomFetch';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
    const { id: paramId } = useParams();
    const id = paramId || 'popular';
    const { data: movies, isLoading, isError } = useCustomFetch(`/movie/${id}?language=ko-kr`);
    
    if (isLoading) {
        return <h1 style={{ color: `white` }}>로딩중 입니다</h1>;
    }

    if (isError) {
        return <h1 style={{ color: `white` }}>에러 입니다</h1>;
    }
    console.log(movies);
    return (
        <Container>
            {movies.data?.results.map((movie) => (
                <Link to={`/movies/${movie.id}`}>
                    <MovieCard key={movie.id}>
                        <StyledImg
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // src 속성 수정
                            alt={movie.title}
                        ></StyledImg>
                        <StyledLink bold>{movie.title}</StyledLink>
                        <StyledLink>{movie.release_date}</StyledLink>
                    </MovieCard>
                </Link>
            ))}
        </Container>
    );
};

export default MoviesPage;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap : wrap;
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

const StyledLink = styled.a`
    color: #fff;
    font-size: 16px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};

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
