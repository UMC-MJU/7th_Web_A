import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Items from './items';
import GridListSkeleton from './grid-list-skeleton';
import { useGetMovies } from '../hooks/queries/useGetMovies';
import { useQuery } from '@tanstack/react-query';
import { useGetInfiniteMovies } from '../hooks/queries/useGetInfinteMovies';
import { useInView } from "react-intersection-observer";
import ClipLoader from "react-spinners/ClipLoader";
import useCustomFetch from '../hooks/useCustomFetch';

const Grid = ({kind, keyword }) => {
  // isPending : 데이터를 불러오는 중입니다. 데이터가 로딩중일때 isPending
  // isLoading : 데이터를 불러오는 중이거나, 재시도 중일때 true가 된다. 

  // const {data:movies, isPending, isLoading, isError} = useQuery({
  //   queryFn: () => useGetMovies({category: kind, pageParam: 1}),
  //   queryKey: ['movies', kind],
  //   cacheTime: 100000,
  //   staleTime: 100000,
  // })
  
  const { data: movies, isLoading, isFetching, hasNextPage, isPending, fetchNextPage, isFetchingNextPage, error, isError } = useGetInfiniteMovies(kind);

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage])
  // 로딩시 보여지는 skeleton UI
  if (isPending) {
    return (
      <ItemsContainer>
        <GridListSkeleton number={20} />
      </ItemsContainer>

    )
  }

  if (keyword && movies.data?.results.length === 0) {
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
        {/* {movies?.results?.map((movie) => (
            <div key={movie.id}>
              <Items datas ={movie} />
            </div>
        ))} */}
        {/* {movies?.pages.map((page) => {
          // [1Page, 2Page, 3Page, ... 4Page] 요런 정보가 담겨있음
          return page.results.map((movie, _) => {
            return <div key={movie.id}><Items datas={movie} /></div>
          })
        })} */}
        
        {movies?.pages
        ?.map(page => page.results)
        ?.flat()
        ?.map((movie, _) => (
          <div key={movie.id}><Items datas={movie} /></div>
        ))
        }
        {isFetching && <GridListSkeleton number={20} />}
      </ItemsContainer>
      <InfiniteScroll ref={ref}>
        {isFetching && <ClipLoader color='#fff' />}
      </InfiniteScroll>
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

const InfiniteScroll = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
`