import { useLocation } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import { styled } from 'styled-components';

const MovieDetail = () => {
  const { state } = useLocation();
  const {data: moviesDetail, isLoading: DetailLoading, isError: DetailError} = useCustomFetch(`/movie/${state.id}?language=ko-KR&page=1`);
  const {data: moviesMembers, isLoading: MemberLoading, isError: MemberError} = useCustomFetch(`/movie/${state.id}/credits?language=ko-KR&page=1`);

  return (
    <>
    <MoviePosterImg image={state.movieImgPath}></MoviePosterImg>
    </>
  )
}

export default MovieDetail;

const MoviePosterImg = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${$props => $props.image});
  border-radius: 15px;
  background-size: cover;
  background-position : center;
  background-repeat: no-repeat;
`