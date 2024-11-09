import { createContext } from "react";
import { useState, useEffect } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({children}){
  const [login, isLogin] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  return <LoginContext.Provider value={{
    login, isLogin, accessToken, setAccessToken, refreshToken, setRefreshToken
  }}>{children}</LoginContext.Provider>
}