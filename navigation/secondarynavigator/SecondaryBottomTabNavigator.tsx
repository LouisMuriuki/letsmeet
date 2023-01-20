import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext,useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../../context/ThemeContext";
import theme from "../../theme/theme";
import { TouchableOpacity } from "react-native";
import SecondaryDrawerNavigator from "./SecondaryDrawerNavigator";
import SecondaryTopTabNavigator from "./SecondaryTopTabNavigator";
import { SearchContext } from "../../context/SearchContext";
import SearchBar from "../../components/Searchbar";
const Tab = createBottomTabNavigator();
const SecondaryBottomTabNavigator = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  const { searchtext, setSearchText } = useContext(SearchContext);
  const [searchavailable, setSearchAvailable] = useState(false);
  return (
    <Tab.Navigator
    initialRouteName="secondarydrawernavigator"
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
        name="secondarydrawernavigator"
        component={SecondaryDrawerNavigator}
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
        name="Visitors"
        component={SecondaryTopTabNavigator}
        options={{
          tabBarLabel: "Visitors",
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

export default SecondaryBottomTabNavigator;
