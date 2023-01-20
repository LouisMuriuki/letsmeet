import { createContext, useState } from "react";

export const SearchContext = createContext();
const SearchContextProvider = ({ children }) => {
  const [searchtext, setSearchText] = useState("");
  return (
    <SearchContext.Provider value={{ searchtext, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
