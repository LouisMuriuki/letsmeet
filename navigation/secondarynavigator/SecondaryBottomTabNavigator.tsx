import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../../context/ThemeContext";
import theme from "../../theme/theme";

import SecondaryDrawerNavigator from "./SecondaryDrawerNavigator";
import SecondaryTopTabNavigator from "./SecondaryTopTabNavigator";
const Tab = createBottomTabNavigator();
const SecondaryBottomTabNavigator = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <Tab.Navigator
    initialRouteName="secondarydrawernavigator"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: darkmode
            ? theme.dark.background
            : theme.light.background,
        },
        headerTintColor: darkmode
        ? theme.dark.textcolor
        : theme.light.textcolor,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: darkmode
            ? theme.dark.background
            : theme.light.background,
        },
      }}
    >
      <Tab.Screen
        name="secondarydrawernavigator"
        component={SecondaryDrawerNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#FF7D54",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? "#FF7D54" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Visitors"
        component={SecondaryTopTabNavigator}
        options={{
          tabBarLabel: "Visitors",
          tabBarActiveTintColor: "#FF7D54",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="people"
              size={24}
              color={focused ? "#FF7D54" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default SecondaryBottomTabNavigator;
