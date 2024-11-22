import { useState } from 'react';
import authAxios from '../apis/auth-axios';

const useAuthFetch = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetchData = async (url, method = 'GET', body = null) => {
        setIsLoading(true);
        setIsError(false); // 새로운 요청마다 초기화

        try {
            let response;
            if (method === 'GET') response = await authAxios.get(url);
            else if (method === 'POST') response = await authAxios.post(url, body);
            else if (method === 'PATCH') response = await authAxios.patch(url, body);
            else if (method === 'DELETE') response = await authAxios.delete(url);

            setData(response.data);
        } catch (error) {
            console.error('회원 API 호출 실패:', error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return { fetchData, data, isLoading, isError };
};

export default useAuthFetch;
