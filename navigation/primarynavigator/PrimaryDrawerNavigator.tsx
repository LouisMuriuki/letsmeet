import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CustomDrawer from "../../components/CustomDrawer";
import Home from "../../screens/primary/Home";
import DrawerIcon from "../../components/DrawerIcon";
const Drawer = createDrawerNavigator();
const PrimaryDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      screenOptions={({ navigation }) => ({
        // headerLeft: () => <DrawerIcon navigation={navigation}  />,
        headerShadowVisible: false,
        title: "",
        headerStyle: {
          backgroundColor: "#000000",
        },
        headerTintColor: "#fff",
      })}
    >
      <Drawer.Screen name="primaryhome" component={Home} />
    </Drawer.Navigator>
  );
};

export default PrimaryDrawerNavigator;
