import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomDelete = () => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const deleteData = async ({id}) => {
      setIsLoading(true);
      try{
        const {data} =  await axiosInstance.delete(`/todo/${id}`);
        setData(data);
      } catch(error){
        setIsError(true);
      } finally{
        setIsLoading(false);
      }
  }

  return {data, isLoading, isError, deleteData}
};

export default useCustomDelete;