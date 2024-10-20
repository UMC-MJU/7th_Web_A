import { useLocation } from "react-router-dom";
import useCustomFetch from "../hooks/useCustomFetch";
import Content from "../components/content";
import { styled } from 'styled-components';

const MovieDetail = () => {
  const { state } = useLocation();

  const {data: moviesMembers, isLoading: MemberLoading, isError: MemberError} = useCustomFetch(`/movie/${state.id}/credits?language=ko-KR&page=1`);

  return (
    <>
    <Content url={`/movie/${state.id}?language=ko-KR&page=1`}/>
    </>
  )
}

export default MovieDetail;

