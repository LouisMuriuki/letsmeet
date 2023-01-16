import {StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import theme from "../theme/theme";
import { ThemeContext } from "../context/ThemeContext";
import Images from "./Images";
const Avatar = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  const lui=require("../assets/lui.jpg")
  return (
    <View style={{ marginRight: 15 }}>
      <Images height={25} width={25} image={lui}/>
      {/* <View
        style={[
          styles.avatarcontainer,
          {
            borderColor: darkmode
              ? theme.dark.textcolor
              : theme.light.textcolor,
          },
          {
            backgroundColor: darkmode
              ? theme.dark.secondarybg
              : theme.light.secondarybg,
          },
        ]}
      >
        <Text
          style={[
            styles.avatartext,
            { color: darkmode ? theme.light.textcolor : theme.light.textcolor },
          ]}
        >
          LM
        </Text>
      </View> */}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  avatarcontainer: {
    borderRadius: 50,
    padding: 2,
    borderWidth: 1,
  },
  avatartext: {},
});
