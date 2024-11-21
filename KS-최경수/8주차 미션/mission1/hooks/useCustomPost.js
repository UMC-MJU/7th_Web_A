import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

const useCustomPost = (url) => {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const postData = async (title, content, checked = false) => {
    console.log(title, content, checked)
      setIsLoading(true);
      try{
        const {data} =  await axiosInstance.post(url, {
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

  return {data, isLoading, isError, postData}
};

export default useCustomPost;