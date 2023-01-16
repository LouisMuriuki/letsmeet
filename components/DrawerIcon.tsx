import { StyleSheet, Pressable, View } from "react-native";
import React from "react";
import { Entypo } from '@expo/vector-icons';
// import { HiOutlineMenuAlt1} from "react-icons/hi";
const DrawerIcon = ({ navigation }) => {
  return (
    <Pressable onPress={navigation.toggleDrawer}>
      <View>
      <Entypo name="menu" size={24} color="white" />
      </View>
    </Pressable>
  );
};

export default DrawerIcon;

const styles = StyleSheet.create({});
