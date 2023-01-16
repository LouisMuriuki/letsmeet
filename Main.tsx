import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import AppStack from "./navigation/AppStack";
import { ThemeContext } from "./context/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
const Main = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <StatusBar style={darkmode ? "light" : "dark"} />
      <AppStack />
    </NavigationContainer>
  );
};

export default Main;

const styles = StyleSheet.create({});
