import { createContext, useState } from "react";

export const PopupContext = createContext();
export const PopupContextProvider = ({ children }) => {
  const [customealertvisible, setCustomAlertVisible] = useState(false);
  return (
    <PopupContext.Provider
      value={{ customealertvisible, setCustomAlertVisible }}
    >
      {children}
    </PopupContext.Provider>
  );
};
