import { useEffect, useState } from "react";
import axios from "axios";

const useCustomPost = (url, userInfo) => {
  const [data, setData] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const postData = async () => {
      try{
        const response = await axios.post(url,{
          email: userInfo.email,
          password: userInfo.password,
          passwordCheck: userInfo.passwordcheck,
        })
        setData(response);
      } catch(error){
        setIsError(error);
      }
    }
    postData();
  }, [url]);

  return {data, isError}
}

export default useCustomPost;