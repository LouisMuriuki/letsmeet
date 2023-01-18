import React from "react";
import PrimaryBottomTabNavigator from "./primarynavigator/PrimaryBottomTabNavigator";
import PrimaryDrawerNavigator from "./primarynavigator/PrimaryDrawerNavigator";
import PrimaryHomeStackNavigator from "./primarynavigator/PrimaryHomeStackNavigator";

const AppStack = () => {
  return <PrimaryHomeStackNavigator />;
};

export default AppStack;
