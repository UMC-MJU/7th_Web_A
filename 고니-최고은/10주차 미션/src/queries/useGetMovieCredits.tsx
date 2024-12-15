import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

// 영화 크레딧 응답 타입 정의
interface MovieCredits {
  cast: Array<{
    id: number;
    name: string;
    character: string;
    // 필요한 필드를 추가
  }>;
  crew: Array<{
    id: number;
    name: string;
    job: string;
    // 필요한 필드를 추가
  }>;
}

const useGetMovieCredits = (movieId: number | null, apiKey: string) => {
  return useQuery<MovieCredits, Error>({
    queryKey: ["movieCredits", movieId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/movie/${movieId}/credits?api_key=${apiKey}&language=ko-KR`
      );
      return data;
    },
    enabled: !!movieId, // movieId가 있을 때만 쿼리 활성화
  });
};

export { useGetMovieCredits };
