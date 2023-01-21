import { StyleSheet, Image, View } from "react-native";
import React, { useContext } from "react";
import theme from "../theme/theme";
import { ThemeContext } from "../context/ThemeContext";

const Images = ({ image, width, height }) => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.avatarcontainer,
        {
          borderColor: darkmode
            ? theme.dark.imagebordercolor
            : theme.light.imagebordercolor,
          width:width+4,
          height:height+4,
          borderRadius: 50,
        },
      ]}
    >
      <Image style={[styles.tinyLogo, { height, width }]} source={image} />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  tinyLogo: {
    borderRadius: 50,
  },
  avatarcontainer: {
    borderRadius: 50,
    padding: 1,
    borderWidth: 1,
  },
});
