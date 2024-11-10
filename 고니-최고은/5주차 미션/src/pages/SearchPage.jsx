import React from 'react';
import * as S from '../style/search.style';
import { useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import useCustomFetch from '../hooks/useCustomFetch';
import MovieCard from '../components/moviecard';
import SearchMovieList from '../components/search-movie-list';


const SearchPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }
    const [searchParams, setSearchParams] = useSearchParams({
        mq: ''
    })

    const mq = searchParams.get('mq')

    console.log(mq === searchValue);

    const handleSearchMovie = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`)
    }

    const handleSearchMovieWithKeyboard = (e) => {
        if (e.key === 'Enter') {
            handleSearchMovie();
        }
    }
    
    return (
        <>
            <S.SearchContainer>
                <input placeholder='영화 제목을 입력해주세요...' value={searchValue} onChange={onChangeSearchValue}
                    onKeyDown={handleSearchMovieWithKeyboard}></input>
                <button onClick={handleSearchMovie}>검색</button>
            </S.SearchContainer>
            <SearchMovieList/>
        </>
    );
};

export default SearchPage;