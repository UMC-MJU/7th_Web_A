import { styled } from 'styled-components';
import "../../../../0-공통/color.css"

const Items = ({data}) => {

  const movieImgPath = "https://image.tmdb.org/t/p/original" + data.poster_path;
  const movieTitle = data.title;
  const movieDate = data.release_date;

  return (
    <>
    <MoviesItem image={movieimgPath}></MoviesItem>
    <MoviesItemTitle>{movietitle}</MoviesItemTitle>
    <MoviesItemDate>{moviedate}</MoviesItemDate>
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