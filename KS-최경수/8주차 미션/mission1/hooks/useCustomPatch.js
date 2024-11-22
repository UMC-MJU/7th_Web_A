import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomPatch = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const patchData = async ({id, title, content, checked}) => {
      setIsLoading(true);
      try{
        const {data} =  await axiosInstance.patch(`/todo/${id}`, {
          id,
          title,
          content,
          checked
        });
        setData(data);
      } catch(error){
        setIsError(true);
      } finally{
        setIsLoading(false);
      }
  }

  return {data, isLoading, isError, patchData}
};

export default useCustomPatch;