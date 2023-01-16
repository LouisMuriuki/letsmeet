import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import PrimaryStackNavigator from "./PrimaryHomeStackNavigator";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PrimaryTopTabNavigator from "./PrimaryTopTabNavigator";
import { ThemeContext } from "../../context/ThemeContext";
import theme from "../../theme/theme";
const Tab = createBottomTabNavigator();

const PrimaryBottomTabNavigator = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <Tab.Navigator
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
        name="primarystacknavigator"
        component={PrimaryStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarActiveTintColor: "#FF7D54",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? "#FF7D54" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Meetings"
        component={PrimaryTopTabNavigator}
        options={{
          tabBarLabel: "Meetings",
          tabBarActiveTintColor: "#FF7D54",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="meeting-room"
              size={24}
              color={focused ? "#FF7D54" : "black"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default PrimaryBottomTabNavigator;
