import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch';
import { Link } from 'react-router-dom';
import SearchMovieList from '../components/Movie/search-movie-list';
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };
    const [searchParams, setSearchParams] = useSearchParams({
        mq: '',
    });
    const mq = searchParams.get('mq');
    const url = `/search/movie?query=${mq}&include_adult=false&language=ko-KR&page=1`;

    // const { data: movies, isLoading, isError } = useCustomFetch(url);

    const handleSearchMovies = () => {
        if (mq === searchValue) return;
        navigate(`/search?mq=${searchValue}`);
    };

    const handleSearchMovieWithKeyboard = (event) => {
        if (event.key === 'Enter') {
            handleSearchMovies();
        }
    };

    return (
        <>
            <SearchContainer>
                <input
                    placeholder="영화 제목을 입력해주세요"
                    value={searchValue}
                    onChange={onChangeSearchValue}
                    onKeyDown={handleSearchMovieWithKeyboard}
                ></input>
                <button onClick={handleSearchMovies}>검색</button>
            </SearchContainer>
            <SearchMovieList />
        </>
    );
};

export default Search;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;

    input {
        flex: 1;
        padding: 15px;
        border: 1px solid rgb(220, 220, 220);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    button {
        width: 80px;
        background-color: #f82e62;
        color: white;
        cursor: pointer;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;
