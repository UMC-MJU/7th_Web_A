import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

// 영화 세부정보 응답 타입 정의
interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  // 필요한 필드를 추가
}

const useGetMovieDetails = (movieId: number | null, apiKey: string) => {
  return (
    useQuery < MovieDetails,
    Error >
      {
        queryKey: ["movieDetails", movieId],
        queryFn: async () => {
          const { data } = await axiosInstance.get(
            `/movie/${movieId}?api_key=${apiKey}&language=ko-KR`
          );
          return data;
        },
        enabled: !!movieId, // movieId가 있을 때만 쿼리 활성화
      }
  );
};

export { useGetMovieDetails };
