import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

const useGetMovieDetails = (movieId, apiKey) => {
    return useQuery({
        queryKey: ['movieDetails', movieId],
        queryFn: async () => {
            const { data } = await axiosInstance.get(`/movie/${movieId}?api_key=${apiKey}&language=ko-KR`);
            return data;
        },
        enabled: !!movieId, // movieId가 있을 때만 쿼리 활성화
    });
};

export { useGetMovieDetails };