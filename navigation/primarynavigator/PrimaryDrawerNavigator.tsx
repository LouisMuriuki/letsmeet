import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext } from "react";
import CustomDrawer from "../../components/CustomDrawer";
import Home from "../../screens/primary/Home";
import theme from "../../theme/theme";
import DrawerIcon from "../../components/DrawerIcon";
import { ThemeContext } from "../../context/ThemeContext";
import Avatar from "../../components/Avatar";
import PrimaryBottomTabNavigator from "./PrimaryBottomTabNavigator";
import PrimaryHomeStackNavigator from "./PrimaryHomeStackNavigator";
const Drawer = createDrawerNavigator();
const PrimaryDrawerNavigator = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        // headerLeft: () => <DrawerIcon navigation={navigation}  />,
        headerRight: () => <Avatar onPress={()=>navigation.toggleDrawer} />,
        headerShadowVisible: false,
        title: "",
        headerStyle: {
          backgroundColor: darkmode
            ? theme.dark.background
            : theme.light.background,
        },
        headerTintColor: darkmode
        ? theme.dark.textcolor
        : theme.light.textcolor,
      })}
    >
      <Drawer.Screen name="home" component={Home} />
    </Drawer.Navigator>
  );
};

export default PrimaryDrawerNavigator;
