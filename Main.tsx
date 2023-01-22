import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import AppStack from "./navigation/AppStack";
import { ThemeContext } from "./context/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
const Main = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <NavigationContainer>
      <StatusBar style={darkmode ? "light" : "dark"} />
      <Login/>
    </NavigationContainer>
    // <>
    //   <StatusBar style={darkmode ? "light" : "dark"} />
    //   <Login />
    // </>
  );
};

export default Main;

const styles = StyleSheet.create({});
