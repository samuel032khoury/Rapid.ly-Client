import { useState } from "react";
import { ContextApi } from "@/api/contextApi";

export const ContextProvider = ({ children }) => {
  const getToken = () =>
    localStorage.getItem("JWT_TOKEN")
      ? JSON.parse(localStorage.getItem("JWT_TOKEN"))
      : null;

  const [token, setToken] = useState(getToken());

  const tokenObj = {
    token,
    setToken,
  };
  return <ContextApi.Provider value={tokenObj}>{children}</ContextApi.Provider>;
};
