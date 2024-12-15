import { axiosInstance } from "../apis/axios-instance";

// 매개변수 타입 정의
interface GetMoviesParams {
  selectedCategory: string; // 카테고리의 타입을 필요에 따라 수정하세요
  pageParam: number; // 페이지 번호
}

// 영화 데이터 응답 타입 정의
interface MovieResponse {
  results: any[]; // 결과의 타입을 더 구체적으로 정의할 수 있습니다.
  page: number;
  total_pages: number;
  total_results: number;
}

const useGetMovies = async ({
  selectedCategory,
  pageParam,
}: GetMoviesParams): Promise<MovieResponse> => {
  const endpoint = "https://api.themoviedb.org/3/movie";
  const apiKey = import.meta.env.VITE_TMDB_TOKEN;

  console.log(selectedCategory, pageParam);
  const { data } = await axiosInstance.get(
    `${endpoint}/${selectedCategory}?api_key=${apiKey}&language=ko-KR&page=${pageParam}`
  );

  console.log("Fetched Data:", data);
  return data;
};

export { useGetMovies };
