import { createContext,useEffect,useState } from "react";
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkmode, setDarkMode] = useState(true);  
  return (
    <ThemeContext.Provider value={{ darkmode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
