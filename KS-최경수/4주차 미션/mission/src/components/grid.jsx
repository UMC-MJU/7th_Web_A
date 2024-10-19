import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Items from './Items';
import axios from "axios";
import { axiosInstance } from '../apis/axios-instance';
import useCustomFetch from '../hooks/useCustomFetch';

const Grid = ({url}) => {
  const {data:movies, isLoading, isError} = useCustomFetch(url);

  if(isLoading){
    return <div>
      <h1 style={{color: 'white'}}>로딩 중입니다... </h1>
    </div>
  }

  if(isError){
    return <div>
      <h1 style={{color: 'white'}}>에러 입니다.... </h1>
    </div>
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
    background-color: black;
    width: 130px;
    height: 240px;
  }
`

