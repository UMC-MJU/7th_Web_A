import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Items from './Items';
import axios from "axios";
import { axiosInstance } from '../apis/axios-instance';

const Grid = ({url}) => {
  console.log(url);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
        const movies = await axiosInstance.get(url);
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

