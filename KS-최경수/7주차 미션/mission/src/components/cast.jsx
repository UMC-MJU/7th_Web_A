import { styled } from 'styled-components';
import CastItems from './castitems';
import useCustomFetch from '../hooks/useCustomFetch';
import Loading from '../pages/loading';


const Cast = ( {movieId} ) => {
  const {data: moviesMembers, isLoading, isError} = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR&page=1`);

  if(isLoading) return <Loading/>

  return (
    <>
    <CastTitle>감독/출연</CastTitle>
    <CastContainer>
      {moviesMembers.data?.cast.map((member) => (
          <CastItems key={member.id} datas={member}/>
      ))}
    </CastContainer>
    </>
  )
}

export default Cast;

const CastTitle = styled.div`
  color: var(--w4-textColor);
  margin-top: 20px;
  font-size: 28px;
  font-weight: bold;
`

const CastContainer = styled.div`
  box-sizing: border-box;
  margin-top: 27px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, auto));
  gap: 30px 0px;

`
