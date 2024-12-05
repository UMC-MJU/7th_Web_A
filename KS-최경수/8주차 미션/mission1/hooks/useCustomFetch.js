import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNoResult, setIsNoResult] = useState(false);

  const fetchData = async (id ,search = '') => {
      const url = id === undefined ? `/todo?title=${search}` : `/todo/${id}`;
      setIsLoading(true);
      try{
        const {data} =  await axiosInstance.get(url);
        id === undefined ? setData(data[0]): setData(data);
      } catch(error){
        setIsError(true);
      } finally{
        setIsLoading(false);
      }
    }

  return {data, isLoading, isError,isNoResult, fetchData}
}

export default useCustomFetch;