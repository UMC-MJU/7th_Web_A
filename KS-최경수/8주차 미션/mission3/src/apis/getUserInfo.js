import { userInstance } from "./axios-user";

const resgiterUserInfo = async ({email, password, passwordCheck}) => {
  const {data} = await userInstance.post('/auth/register',{
    email,
    password,
    passwordCheck 
  });
  return data;
}

const loginUserInfo = async ({email, password}) => {
  const {data} = await userInstance.post('/auth/login',{
    email,
    password
  });
  return data;
}

export { resgiterUserInfo, loginUserInfo };