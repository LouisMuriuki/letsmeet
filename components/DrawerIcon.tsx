import { StyleSheet, Pressable, View } from "react-native";
import React from "react";
import { HiOutlineMenuAlt1} from "react-icons/hi";
const DrawerIcon = ({ navigation }) => {
  return (
    <Pressable onPress={navigation.toggleDrawer}>
      <View>
        <HiOutlineMenuAlt1/>
      </View>
    </Pressable>
  );
};

export default DrawerIcon;

const styles = StyleSheet.create({});
