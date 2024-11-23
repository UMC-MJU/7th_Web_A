import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (id, search = '') => {
      const url = id === undefined || id === "" ? `/todo?title=${search}` : `/todo/${id}` ;
      console.log
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

  return {data, isLoading, isError, fetchData}
}

export default useCustomFetch;