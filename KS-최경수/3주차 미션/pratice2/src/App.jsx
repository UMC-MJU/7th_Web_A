import './App.css';
import Items from './components/Items.jsx';
import { useEffect, useState } from 'react';
import { MOVIES } from './mocks/movies.js';
import axios from "axios";


function App() {
  const moviese = MOVIES.results;

  const [movies ,setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDU5YjgxZjNhNzM4ODM1NWY1M2ZjNTdjMDgzMzI5ZSIsIm5iZiI6MTcyNzk1NTc1OC4zNDc4NjksInN1YiI6IjY2ZmU3ZmE0YzlhMTBkNDZlYTdjOGZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nKUWbSsB_icBkh1vRdGa61tuXuwXNpjagQsoqLldSN0`,
            }
        })
        setMovies(movies);
    }
    getMovies()
}, []);

useEffect(()=>{
  console.log("useEffect 이해");
})

  return (
    <>
    <main>
      {movies.data?.results.map((movie) => (
        <Items key={movie.id} data={movie} />
      ))}
    </main>
    </>
  )
}

export default App
