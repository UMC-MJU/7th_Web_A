import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Items from './items';
import useCustomFetch from '../hooks/useCustomFetch';
import GridListSkeleton from './grid-list-skeleton';

const Grid = ({url, keyword}) => {
  const {data:movies, isLoading, isError} = useCustomFetch(url);


  if(isLoading){
    return (
      <ItemsContainer>
        <GridListSkeleton number={20}/>
      </ItemsContainer>

  )
  }

  if(keyword && movies.data?.results.length === 0) {
    return (
      <WarningContianer>
        <h1>해당하는 검색어 {keyword}에</h1>
        <h1>해당하는 데이터가 없습니다.</h1>
      </WarningContianer>
    )
  }

  return (
    <>
     <ItemsContainer>
        {movies.data?.results.map((movie) => (
            <div key={movie.id}>
              <Items datas ={movie} />
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
    width: 130px;
    height: 240px;
  }
`

const WarningContianer = styled.main`
  text-align: center;
  margin-top: 30px;

  h1{
  }
`