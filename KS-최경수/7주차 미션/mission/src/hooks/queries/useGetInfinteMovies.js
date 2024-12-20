import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetMovies } from "./useGetMovies";

function useGetInfiniteMovies(category) {
  return useInfiniteQuery({
    queryFn: ({pageParam}) => useGetMovies({category, pageParam}),
    queryKey: ['moviesInfinite', category],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // const lastMovie = lastPage.results[lastPage.results.length - 1];

      const lastMovie = lastPage.results.at(-1);  // at(-1)과 length-1은 동일한 역할을 수행

      return lastMovie ? allPages?.length + 1 : undefined;
    }
  })
}

export {useGetInfiniteMovies}