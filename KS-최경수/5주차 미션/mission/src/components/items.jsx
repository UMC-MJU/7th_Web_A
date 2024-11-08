import { styled } from 'styled-components';
import "../../../../0-공통/color.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Items = ({datas}) => {
  const navigate = useNavigate();
  const [movieData, setMoviceData] = useState({
    id: datas.id,
    movieImgPath: `https://image.tmdb.org/t/p/original${datas.poster_path}`,
    movieTitle: datas.title,
    movieDate : datas.release_date,
  });

  return (
    <>
    <MoviesItem image={movieData.movieImgPath} onClick={() => navigate(`movies/movieitem/${datas.id}`, {replace: false, state: movieData})}></MoviesItem>
    <MoviesItemTitle>{movieData.movieTitle}</MoviesItemTitle>
    <MoviesItemDate>{movieData.movieDate}</MoviesItemDate>
    </>
  )
}

export default Items

const MoviesItem = styled.div`
  width: 130px;
  height: 200px;
  background-image: url(${$props => $props.image});
  border-radius: 15px;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover{
    filter: brightness(0.5);
  }
`

const MoviesItemTitle = styled.p`
  margin-top: 10px;
  color: var(--w3-fontColor);
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const MoviesItemDate = styled.p`
  margin-top: 3px;
  color: var(--w3-fontColor);
  font-size: 12px;
`