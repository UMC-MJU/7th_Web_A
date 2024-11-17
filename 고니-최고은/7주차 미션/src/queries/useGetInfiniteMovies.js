import { useInfiniteQuery } from "@tanstack/react-query";
import { useGetMovies } from "./useGetMovies";

function useGetInfiniteMovies(selectedCategory) {
    return useInfiniteQuery({
        queryKey: ['movies', selectedCategory],
        queryFn: ({ pageParam = 1 }) => useGetMovies({ selectedCategory, pageParam }),
        getNextPageParam: (lastPage) => {
            // lastPage가 정의되어 있고 results가 있는지 확인
            if (lastPage && lastPage.results && lastPage.results.length > 0) {
                return lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined; // 다음 페이지 번호 반환
            }
            return undefined; // 더 이상 페이지가 없으면 undefined
        },
    })
}

export {useGetInfiniteMovies}