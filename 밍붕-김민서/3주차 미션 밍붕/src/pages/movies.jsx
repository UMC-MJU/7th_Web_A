import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const { id: paramId } = useParams();
    const id = paramId || 'popular';
    const getMovies = async () => {
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=ko-KR&page=1`, {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWI3NGNjNGVjM2JmYTA4MjE1YzAwZWE5MWJmODA3NyIsIm5iZiI6MTcyODI2NTM1Ny4zMjU4ODUsInN1YiI6IjY3MDMzYjJmMTU5MmVmMWJhOTg1YWM5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WHjM3SzWV-Ou0LN67p8r_LYgRIGR66e2UhQkjsqbU4E',
            },
        });
        setMovies(movies);
    };

    useEffect(() => {
        getMovies();
    }, [id]);
    console.log(movies);
    return (
        <Container>
            {movies.data?.results.map((movie) => (
                <MovieCard key={movie.id}>
                    <StyledImg
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // src 속성 수정
                        alt={movie.title}
                    ></StyledImg>
                    <StyledLink bold>{movie.title}</StyledLink>
                    <StyledLink>{movie.release_date}</StyledLink>
                </MovieCard>
            ))}
        </Container>
    );
};

export default MoviesPage;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    justify-items: center;
    box-sizing: border-box;
`;

const StyledImg = styled.img`
    margin: 2px;
    width: 160px;

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
    margin: 10px;
`;
