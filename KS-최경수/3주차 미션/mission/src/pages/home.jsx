import { useEffect, useState } from 'react';
import axios from "axios";
import Items from '../components/Items';
import { styled } from 'styled-components';

const Home = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDU5YjgxZjNhNzM4ODM1NWY1M2ZjNTdjMDgzMzI5ZSIsIm5iZiI6MTcyNzk1NTc1OC4zNDc4NjksInN1YiI6IjY2ZmU3ZmE0YzlhMTBkNDZlYTdjOGZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nKUWbSsB_icBkh1vRdGa61tuXuwXNpjagQsoqLldSN0`,
            }
        })
        setMovies(movies);
    }
    getMovies()
}, []);

  return (
    <>
      <ItemsContainer>
        {movies.data?.results.map((movie) => (
          <>
            <ItemsWrapper>
              <Items key={movie.id} data={movie} />
            </ItemsWrapper>
          </>
        ))}
      </ItemsContainer>
    </>
  )
}

export default Home;

const ItemsContainer = styled.main`
  box-sizing: border-box;
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(auto-fit, minmax(134px, auto));
  gap: 15px;

  > div{
    background-color: black;
    width: 130px;
    height: 240px;
  }
`

const ItemsWrapper = styled.div`
`