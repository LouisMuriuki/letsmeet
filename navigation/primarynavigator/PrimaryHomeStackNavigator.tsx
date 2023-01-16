import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import PrimaryDrawerNavigator from "./PrimaryDrawerNavigator";

const Stack = createNativeStackNavigator();
const PrimaryHomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="primarydrawer"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="primarydrawer" component={PrimaryDrawerNavigator} />
    </Stack.Navigator>
  );
};

export default PrimaryHomeStackNavigator;
