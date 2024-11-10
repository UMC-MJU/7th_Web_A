import {useEffect, useState} from "react";
import { axiosInstance } from "../apis/axios-instance";

//const {data, isLoading, isError} = useCustomFetch('url')

const useCustomFetch = (url) => {
    const[data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(false);
    const[isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(url);
                console.log("Fetching URL:", url);

                const endpoints = ['/now_playing', '/popular', '/top_rated', '/upcoming'];
                
                if (url.includes('/search/movie')) {
                    // 영화 검색 요청
                    setData(response.data.results || []); // 검색 결과에서 results를 사용
                } else if (url.includes('/movie/') && !endpoints.some(endpoint => url.includes(endpoint))) {
                    // 영화 상세 정보 요청
                    setData(response.data); // 전체 응답 데이터 설정
                } else if (url.includes('/credits')) {
                    // 출연진 정보 요청
                    setData(response.data); // 전체 응답 데이터 설정
                } else {
                    // 다른 영화 목록 요청
                    if (endpoints.some(endpoint => url.includes(endpoint))) {
                        setData(response.data.results || []); // 목록의 경우 results를 사용
                    }
                }

            } catch (error) {
                console.error("API 호출 에러:", error)
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        if (url) {
            fetchData();
        }
    }, [url]);
    
    return {data, isLoading, isError}
}

export default useCustomFetch;