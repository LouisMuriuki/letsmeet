import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const PrimaryTopTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Completed"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 14,fontWeight:"400"},
        tabBarIndicatorStyle:{ backgroundColor:"#1560bd"},
        tabBarActiveTintColor:"#1560bd",
        tabBarBounces: true,
        tabBarPressOpacity:1
      }}>
        
      </Tab.Navigator>
  )
}

export default PrimaryTopTabNavigator

const styles = StyleSheet.create({})