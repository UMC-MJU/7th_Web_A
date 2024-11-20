import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomFetch = (url) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fecthData = async () => {
      try{
        const response = await axiosInstance.get(url);
        setData(response?.data[0]);
      } catch(error){
        setIsError(error);
      } finally{
        setIsLoading(false);
      }
    }
    fecthData();
  }, [])

  return {data, isLoading, isError}
}

export default useCustomFetch;