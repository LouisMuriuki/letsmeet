import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import React from "react";
import { ThemeContextProvider } from "./context/ThemeContext";
import Main from "./Main";
export default function App() {
  return (
    <ThemeContextProvider>
      <Main />
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
