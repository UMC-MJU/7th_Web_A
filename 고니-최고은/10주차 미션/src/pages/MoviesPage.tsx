import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image1 from "../images/green.jpg";
import image2 from "../images/pink.jpg";
import image3 from "../images/black.jpg";
import image4 from "../images/blue.jpg";
import MovieCard from "../components/moviecard";
import { useNavigate } from "react-router-dom";
import { useGetInfiniteMovies } from "../queries/useGetInfiniteMovies";
import { useInView } from "react-intersection-observer";
import ClipLoader from "react-spinners/ClipLoader";
import CardListSkeleton from "../components/card-list-skeleton";

const MoviesContainer = styled.div`
  padding: 5px;
`;

const CategoryTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* 카드 간격 */
`;

const CategoryCard = styled.div`
  width: 280px; /* 카드 너비 */
  height: 110px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const CategoryLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
`;

const CardList = styled.div`
  margin-top: 10px; /* 카드 리스트 여백 */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 30px; /* 카드 간격 */
`;

interface Category {
  id: number;
  name: string;
  image: string;
  endpoint: string;
}

const MoviesPage: React.FC = () => {
  const navigate = useNavigate();
  const endpoint = "https://api.themoviedb.org/3/movie";
  const apiKey = import.meta.env.VITE_TMDB_TOKEN; // API 키를 가져옴
  const [selectedCategory, setSelectedCategory] =
    useState<string>("/now_playing");
  const [showCategories, setShowCategories] = useState<boolean>(true);

  const { data, isFetching, hasNextPage, fetchNextPage, error, isError } =
    useGetInfiniteMovies(selectedCategory);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const categories: Category[] = [
    { id: 1, name: "현재 상영중인", image: image1, endpoint: "/now_playing" },
    { id: 2, name: "인기있는", image: image2, endpoint: "/popular" },
    { id: 3, name: "높은 평가를 받은", image: image3, endpoint: "/top_rated" },
    { id: 4, name: "개봉 예정중인", image: image4, endpoint: "/upcoming" },
  ];

  const handleCategoryClick = (categoryEndpoint: string) => {
    setSelectedCategory(categoryEndpoint);
    setShowCategories(false); // 카테고리 숨기기
  };

  const handleMovieClick = (movieId: number) => {
    navigate(`/movies/${movieId}`); // 상세 페이지로 이동
  };

  if (isError) {
    return (
      <div>
        <h1 style={{ color: "white" }}>에러 발생</h1>
      </div>
    );
  }

  return (
    <MoviesContainer>
      {showCategories && (
        <>
          <CategoryTitle>카테고리</CategoryTitle>
          <CategoryContainer>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                onClick={() => handleCategoryClick(category.endpoint)}
              >
                <CategoryImage src={category.image} alt={category.name} />
                <CategoryLabel>{category.name}</CategoryLabel>
              </CategoryCard>
            ))}
          </CategoryContainer>
        </>
      )}
      {/* 카테고리 숨긴 후에만 영화 카드 리스트 표시 */}
      {!showCategories && data && data.pages && (
        <>
          <CardList>
            {data.pages.map((page) => {
              return page.results.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => handleMovieClick(movie.id)} // 클릭 이벤트 추가
                />
              ));
            })}
            {isFetching && <CardListSkeleton number={20} />}
          </CardList>
          <div
            ref={ref}
            style={{
              marginTop: "50px",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {isFetching && <ClipLoader color={"#fff"} />}
          </div>
        </>
      )}
    </MoviesContainer>
  );
};

export default MoviesPage;
