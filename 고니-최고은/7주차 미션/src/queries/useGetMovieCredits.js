import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

const useGetMovieCredits = (movieId, apiKey) => {
    return useQuery({
        queryKey: ['movieCredits', movieId],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`/movie/${movieId}/credits?api_key=${apiKey}&language=ko-KR`);
            return data;
        },
        enabled: !!movieId, // movieId가 있을 때만 쿼리 활성화
    });
};

export { useGetMovieCredits };