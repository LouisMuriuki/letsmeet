import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import Main from "./Main";
import { PopupContextProvider } from "./context/PopupContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <PopupContextProvider>
        <Main />
      </PopupContextProvider>
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
