import { useEffect, useState } from 'react';
import axios from "axios";
import Grid from '../components/grid';

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
    <Grid movies={movies}></Grid>
    </>
  )
}

export default Home;

