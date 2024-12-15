tsx;

import React, { useState } from "react";
import * as S from "../style/search.style";
import { useNavigate, useSearchParams } from "react-router-dom";
import MovieCard from "../components/moviecard";
import SearchMovieList from "../components/search-movie-list";

const SearchPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const mq = searchParams.get("mq");

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearchMovie = () => {
    if (mq === searchValue) return;
    navigate(`/search?mq=${encodeURIComponent(searchValue)}`);
  };

  const handleSearchMovieWithKeyboard = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleSearchMovie();
    }
  };

  return (
    <>
      <S.SearchContainer>
        <input
          placeholder="영화 제목을 입력해주세요..."
          value={searchValue}
          onChange={onChangeSearchValue}
          onKeyDown={handleSearchMovieWithKeyboard}
        />
        <button onClick={handleSearchMovie}>검색</button>
      </S.SearchContainer>
      <SearchMovieList />
    </>
  );
};

export default SearchPage;
