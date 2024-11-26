import { useQuery,keepPreviousData } from "@tanstack/react-query";
import { useGetMovies } from "./useGetMovies";

function useGetPageMovies(category, pageParam){
  return useQuery({
    queryFn: () => useGetMovies({category: category, pageParam: pageParam}),
    queryKey: ['moviesPage', category, pageParam],
    placeholderData : keepPreviousData, 
    cache: 100000,
  })
}

export {useGetPageMovies}