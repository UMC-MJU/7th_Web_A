import { axiosInstance } from "../apis/axios-instance";

const useGetMovies = async({selectedCategory, pageParam}) => {
    const endpoint = 'https://api.themoviedb.org/3/movie';
    const apiKey = import.meta.env.VITE_TMDB_TOKEN;
    console.log(selectedCategory, pageParam)
    const{data} = await axiosInstance.get(`${endpoint}${selectedCategory}?api_key=${apiKey}&language=ko-KR&page=${pageParam}`);

    console.log("Fetched Data:", data);
    return data;
}

export {useGetMovies}