import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PrimaryTopTabNavigator from "./PrimaryTopTabNavigator";
import { ThemeContext } from "../../context/ThemeContext";
import theme from "../../theme/theme";
import PrimaryDrawerNavigator from "./PrimaryDrawerNavigator";
import SearchBar from "../../components/Searchbar";
import { SearchContext } from "../../context/SearchContext";
import { TouchableOpacity } from "react-native";
const Tab = createBottomTabNavigator();

const PrimaryBottomTabNavigator = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  const { searchtext, setSearchText } = useContext(SearchContext);
  const [searchavailable, setSearchAvailable] = useState(false);

  return (
    <Tab.Navigator
      initialRouteName="primarydrawernavigator"
      screenOptions={{
        headerShown: true,
        headerLeft: () =>
          searchavailable && (
            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => setSearchAvailable(false)}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
        title: searchavailable ? "" : "Meetings",
        headerRight: () => {
          return searchavailable ? (
            <SearchBar width={searchavailable ?"100%":"0%"} setSearchText={setSearchText} searchtext={searchtext} />
          ) : (
            <TouchableOpacity
              style={{ paddingRight: 30 }}
              onPress={() => setSearchAvailable(true)}
            >
              <Ionicons name="ios-search" size={24} color="white" />
            </TouchableOpacity>
          );
        },
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
            <Ionicons
              name="people"
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
