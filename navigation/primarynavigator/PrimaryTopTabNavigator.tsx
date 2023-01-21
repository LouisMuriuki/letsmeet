import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import UpcomingMeetings from "../../screens/primary/UpcomingMeetings";
import CancelledMeetings from "../../screens/primary/CancelledMeetings";
import PastMeetings from "../../screens/primary/PastMeetings";
import theme from "../../theme/theme";
import { ThemeContext } from "../../context/ThemeContext";
const Tab = createMaterialTopTabNavigator();
const PrimaryTopTabNavigator = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="Upcoming"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14, fontWeight: "400", },
        tabBarIndicatorStyle: {
          backgroundColor: "#FF7D54",
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
      <Tab.Screen name="Upcoming" component={UpcomingMeetings}></Tab.Screen>
      <Tab.Screen name="Cancelled" component={CancelledMeetings}></Tab.Screen>
      <Tab.Screen name="Past" component={PastMeetings}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default PrimaryTopTabNavigator;

const styles = StyleSheet.create({});
