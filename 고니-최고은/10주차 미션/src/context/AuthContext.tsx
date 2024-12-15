import React, { createContext, useContext, useState, ReactNode } from "react";

// Context의 타입 정의
interface AuthContextType {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

// Context 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode; // children의 타입 정의
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [nickname, setNickname] = useState<string>("");

  return (
    <AuthContext.Provider value={{ nickname, setNickname }}>
      {children}
    </AuthContext.Provider>
  );
};

// AuthContext 사용을 위한 커스텀 훅
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
