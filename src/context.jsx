import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [name, setName] = useState("hello");
  return <AppContext.Provider value={name}>{children}</AppContext.Provider>;
};

const needContext = () => {
  return useContext(AppContext);
};
