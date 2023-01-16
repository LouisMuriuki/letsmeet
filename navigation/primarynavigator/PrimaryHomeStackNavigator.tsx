import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import NewInvitation from "../../screens/primary/NewInvitation";
import PrimaryDrawerNavigator from "./PrimaryDrawerNavigator";

const Stack = createNativeStackNavigator();
const PrimaryHomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="primarydrawer">
      <Stack.Screen
        name="primarydrawer"
        options={{ headerShown: false }}
        component={PrimaryDrawerNavigator}
      />
      <Stack.Screen name="newinvitation" component={NewInvitation} />
    </Stack.Navigator>
  );
};

export default PrimaryHomeStackNavigator;
