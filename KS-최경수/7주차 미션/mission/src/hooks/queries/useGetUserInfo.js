import { userInstance } from "../../apis/axios-user";

const useGetUserInfo = async ({url}) => {
  try{
    const user = await userInstance.get(url);
    return !!localStorage.getItem("accessToken") ? user: false;

  } catch(error){
  }
}

export {useGetUserInfo};