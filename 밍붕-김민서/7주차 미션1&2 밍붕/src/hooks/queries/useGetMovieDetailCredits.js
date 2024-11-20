import { axiosInstance } from '../../apis/axios-instance';

const useGetMovieDetailCredits = async ({ movieId }) => {
    const { data } = await axiosInstance.get(`/movie/${movieId}/credits?language=ko-kr`);

    return data;
};

export { useGetMovieDetailCredits };
