import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PrimaryStackNavigator from "./PrimaryHomeStackNavigator";
import Meetings from "../../screens/primary/Meetings";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PrimaryTopTabNavigator from "./PrimaryTopTabNavigator";
const Tab = createBottomTabNavigator();
const PrimaryBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "#000000",
        },
      }}
    >
      <Tab.Screen
        name="primarystacknavigator"
        component={PrimaryStackNavigator}
        options={{
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
