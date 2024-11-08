import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({children}){
  const [login, isLogin] = useState(false);
  const [accesstoken, setAccesstoken] = useState('');
  const [refreshtoken, setRefreshtoken] = useState('');

  return <LoginContext.Provider value={{
    login, isLogin, accesstoken, setAccesstoken, refreshtoken, setRefreshtoken
  }}>{children}</LoginContext.Provider>
}