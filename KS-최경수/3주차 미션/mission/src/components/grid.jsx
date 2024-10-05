import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Items from './Items';
import axios from "axios";

const Grid = ({url}) => {
  console.log(url);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
        const movies = await axios.get(url, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDU5YjgxZjNhNzM4ODM1NWY1M2ZjNTdjMDgzMzI5ZSIsIm5iZiI6MTcyNzk1NTc1OC4zNDc4NjksInN1YiI6IjY2ZmU3ZmE0YzlhMTBkNDZlYTdjOGZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nKUWbSsB_icBkh1vRdGa61tuXuwXNpjagQsoqLldSN0`,
                accept: 'application/json'
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
            <div key={movie.id}>
              <Items data={movie} />
            </div>
        ))}
      </ItemsContainer>
    </>
  )
}

export default Grid;

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

