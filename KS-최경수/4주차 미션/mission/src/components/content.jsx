import { styled } from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch';
import Loading from '../pages/loading';


const Content = ({url}) => {
  const {data: moviesDetail, isLoading, isError} = useCustomFetch(url);
  let movieYears = moviesDetail.data?.release_date.split('-');
  let movieImgPath = `https://image.tmdb.org/t/p/original${moviesDetail.data?.poster_path}`;

  if(isLoading) return <Loading/>

  return (
    <>
      <MoviePosterImg image={movieImgPath}>
        <MovieContainer>
          <MovieTitle>{moviesDetail.data?.title}</MovieTitle>
          <MovieGrade>평균 {moviesDetail.data?.vote_average}</MovieGrade>
          <MovieYears>{movieYears?.[0]}</MovieYears>
          <MovieRunTime>{moviesDetail.data?.runtime}분</MovieRunTime>
          <MovieTagLine>{moviesDetail.data?.tagline}</MovieTagLine>
          <MovieDescription>{moviesDetail.data?.overview}</MovieDescription>
        </MovieContainer>
      </MoviePosterImg>
    </>
  )
}

export default Content;

const MoviePosterImg = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${$props => $props.image});
  border-radius: 15px;
  background-size: cover;
  background-position : center;
  background-repeat: no-repeat;
`

const MovieContainer = styled.div`
  width: 100%;
  height: 400px;
  padding: 10px 0px 0px 10px;
  color: var(--w4-textColor);
  background-color: var(--w4-background);
  border-radius: 15px 0px 0px 15px;
  opacity: 0.9;
  background: linear-gradient(90deg, black, #00000000);
`

const MovieTitle = styled.p`
  font-size: 26px;
`
const MovieGrade = styled.p`
  margin-top: 15px;
`
const MovieYears = styled.p``
const MovieRunTime = styled.p``
const MovieTagLine = styled.p`
  font-style: italic;
  font-size: 20px;
  margin: 15px 0px 20px 0px;
`
const MovieDescription = styled.p`
  width: 40%;
  line-height: normal;
`