import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import Main from "./Main";
import { PopupContextProvider } from "./context/PopupContext";
import SearchContextProvider from "./context/SearchContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <SearchContextProvider>
        <PopupContextProvider>
          <Main />
        </PopupContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
