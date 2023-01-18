import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PrimaryTopTabNavigator from "./PrimaryTopTabNavigator";
import { ThemeContext } from "../../context/ThemeContext";
import theme from "../../theme/theme";
import PrimaryDrawerNavigator from "./PrimaryDrawerNavigator";
const Tab = createBottomTabNavigator();

const PrimaryBottomTabNavigator = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <Tab.Navigator
    initialRouteName="primarydrawernavigator"
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
        name="primarydrawernavigator"
        component={PrimaryDrawerNavigator}
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
        name="Meetings"
        component={PrimaryTopTabNavigator}
        options={{
          tabBarLabel: "Meetings",
          tabBarActiveTintColor: "#FF7D54",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="meeting-room"
              size={24}
              color={focused ? "#FF7D54" : "grey"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default PrimaryBottomTabNavigator;
