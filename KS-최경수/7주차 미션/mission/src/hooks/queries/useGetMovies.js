import { axiosInstance } from "../../apis/axios-instance";

const useGetMovies = async ({category, pageParam}) => {
  console.log(category, pageParam)
  const {data} = await axiosInstance.get(`/movie/${category}?language=ko-KR&${pageParam}=1`)

  return data;
}


export {useGetMovies}
