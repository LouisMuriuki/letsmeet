import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import NewGuest from "../../screens/secondary/NewGuest";
import QRscanner from "../../screens/secondary/QRscanner";
import theme from "../../theme/theme";
import SecondaryBottomTabNavigator from "./SecondaryBottomTabNavigator";
const Stack = createNativeStackNavigator();
const SecondaryHomeStackNavigator = () => {
  const {darkmode}=useContext(ThemeContext)
  return (
    <Stack.Navigator initialRouteName="secondarybottomtab"
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
        name="secondarybottomtab"
        options={{ headerShown: false }}
        component={SecondaryBottomTabNavigator}
      />

      <Stack.Screen  name="QR-Scanner" component={QRscanner} />
      <Stack.Screen  name="NewGuest" component={NewGuest} />
    </Stack.Navigator>
  );
};

export default SecondaryHomeStackNavigator;
