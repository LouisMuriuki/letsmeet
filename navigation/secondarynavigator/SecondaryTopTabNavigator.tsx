import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import theme from "../../theme/theme";
import { ThemeContext } from "../../context/ThemeContext";
import CheckedInList from "../../screens/secondary/CheckedInList";
import checkedoutlist from "../../screens/secondary/CheckedOutList";
const Tab = createMaterialTopTabNavigator();
const SecondaryTopTabNavigator = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="Upcoming"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: "400" },
        tabBarIndicatorStyle: {
          backgroundColor: darkmode
            ? theme.dark.textcolor
            : theme.light.textcolor,
        },
        tabBarActiveTintColor:  darkmode
        ? theme.dark.textcolor
        : theme.light.textcolor,
        tabBarBounces: true,
        tabBarPressOpacity: 1,
        tabBarStyle: {
          backgroundColor: darkmode
            ? theme.dark.background
            : theme.light.background,
        },
      }}
    >
      <Tab.Screen name="CheckedIn" component={CheckedInList}></Tab.Screen>
      <Tab.Screen name="CheckedOut" component={checkedoutlist}></Tab.Screen>
      
    </Tab.Navigator>
  );
};

export default SecondaryTopTabNavigator;

const styles = StyleSheet.create({});
