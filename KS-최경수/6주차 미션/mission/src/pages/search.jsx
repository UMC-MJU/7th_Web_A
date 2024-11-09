import { SearchInput, SearchButton } from "../styles/search.style"
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import useCustomFetch from '../hooks/useCustomFetch';
import Grid from '../components/grid';


const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  // useParams 말고 react에서 기본적으로 제공해주는 것
  // 아래와 같이 사용가능
  const [searchParams, setSearchParams] = useSearchParams({
    mq: ''
  })

  const mq = searchParams.get('mq');
  const url = `search/movie?query=${mq}&include_adult=false&language=en-KR&page=1`


  // Debounce 적용해보기
  // const [debounce, setDebounce] = useState(searchValue);
  // useEffect(() => {
  //   const delaydebounceTimer = setTimeout(() => {
  //     setDebounce(searchValue)
  //   }, 1000);

  //   return () => clearTimeout(delaydebounceTimer);
  // }, [searchValue])


  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSearchMovie = () => {
    if (mq === searchValue) return; // 같은 값 검색시 붎필요한 api 호출을 막기 위한 로직
    navigate(`/search?mq=${searchValue}`);
  }

  const handleSearchMovieWithKeyboard = (e) => {
    if (e.key === 'Enter') handleSearchMovie();
  }

  return (
    <>
      <SearchInput placeholder='영화 제목을 입력해주세요...' value={searchValue} onChange={onChangeSearchValue} onKeyDown={handleSearchMovieWithKeyboard}></SearchInput>
      <SearchButton type={'submit'} value={'검색'} onClick={handleSearchMovie}>검색</SearchButton>
      <Grid url={url} keyword={mq}></Grid>
    </>
  )
}

export default Search

