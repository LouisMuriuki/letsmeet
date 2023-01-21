import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import NewInvitation from "../../screens/primary/NewInvitation";
import PrimaryDrawerNavigator from "./PrimaryDrawerNavigator";
import theme from "../../theme/theme";
import PrimaryBottomTabNavigator from "./PrimaryBottomTabNavigator";
const Stack = createNativeStackNavigator();
const PrimaryHomeStackNavigator = () => {
  const {darkmode}=useContext(ThemeContext)
  return (
    <Stack.Navigator initialRouteName="primarybottomtab"
    screenOptions={{
      headerStyle: {
        backgroundColor: darkmode
          ? theme.dark.background
          : theme.light.background,
      },
      headerTintColor: darkmode
        ? theme.dark.textcolor
        : theme.light.textcolor,
    }}
    >
      <Stack.Screen
        name="primarybottomtab"
        options={{ headerShown: false }}
        component={PrimaryBottomTabNavigator}
      />
      <Stack.Screen  name="MeetingInvitation" component={NewInvitation} />
    </Stack.Navigator>
  );
};

export default PrimaryHomeStackNavigator;
