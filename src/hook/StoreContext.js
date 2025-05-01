import { useContext } from "react";
import { ContextApi } from "@/api/contextApi";

export const useStoreContext = () => {
  const context = useContext(ContextApi);
  return context;
};
