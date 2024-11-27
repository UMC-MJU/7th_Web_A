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
import { useGetPageMovies } from '../hooks/queries/useGetPageMovies';

const Grid = ({ kind, flag }) => {
  // isPending : 데이터를 불러오는 중입니다. 데이터가 로딩중일때 isPending
  // isLoading : 데이터를 불러오는 중이거나, 재시도 중일때 true가 된다. 
  const [page, setPage] = useState(1);

  const { data: moviesPage, isPending: pagePending, isFetching: pageFecthing, isPlaceholderData } = useGetPageMovies(kind, page);
  const { data: moviesInfinite, isLoading, isFetching, hasNextPage, isPending: infinitePending, fetchNextPage, isFetchingNextPage, error, isError } = useGetInfiniteMovies(kind);

  const { ref, inView } = useInView({
    threshold: 0,
  })
  console.log(moviesPage)
  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage])


  // 로딩시 보여지는 skeleton UI
  if (infinitePending || pageFecthing) {
    return (
      <ItemsContainer>
        <GridListSkeleton number={20} />
      </ItemsContainer>

    )
  }

  return (
    <>
      <ItemsContainer>
        {/* pagination 적용 */}
        {flag === 'home' && (
          <>
            {moviesPage?.results?.map((movie) => (
              <div key={movie.id}>
                <Items datas={movie} />
              </div>
            ))}
          </>
        )
        }

        {/* infinite scroll 적용 */}
        {flag !== 'home' && (
          <>
            {/* {moviesPage?.pages.map((page) => {
              // [1Page, 2Page, 3Page, ... 4Page] 요런 정보가 담겨있음
              return page.results.map((movie, _) => {
                return <div key={movie.id}><Items datas={movie} /></div>
              })
            })} */}
            {moviesInfinite?.pages
              ?.map(page => page.results)
              ?.flat()
              ?.map((movie, _) => (
                <div key={movie.id}><Items datas={movie} /></div>
              ))
            }
            {isFetching && <GridListSkeleton number={20} />}
          </>
        )
        }
      </ItemsContainer>
      {/* pagination 적용 */}
      {flag === 'home' && (
        <PagenationContainer>
          <PageButton onClick={() => {setPage(old => Math.max(old-1, 0))}} disabled={page === 1}>이전</PageButton>
          <PageText>{page} 페이지</PageText>
          <PageButton onClick={() => {if(!isPlaceholderData) setPage(old => old + 1)}}>다음</PageButton>
        </PagenationContainer>
      )}

      {/* infinite scroll 적용 */}
      {flag !== 'home' && (
        <InfiniteScroll ref={ref}>
          {isFetching && <ClipLoader color='#fff' />}
        </InfiniteScroll>
      )}

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

const PagenationContainer = styled.div`
  color: var(--w7-textcolor);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`

const PageButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  color: var(--w7-textcolor);
  background-color: ${props=>props.disabled? 'var(--w7-disabledbuttonColor)': 'var(--w7-buttonColor)'};
  border: none;
`

const PageText = styled.p`
  
`