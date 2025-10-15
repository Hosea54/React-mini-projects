import { createContext, useContext, useState } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
