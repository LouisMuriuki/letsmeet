import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FloatingPlusButton from "../../components/button/FloatingButton";

const SecondaryHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SecondaryHome</Text>
      <FloatingPlusButton onPress={()=>navigation.navigate("NewGuest")} />
    </View>
  );
};

export default SecondaryHome;

const styles = StyleSheet.create({
  container: {
    flex:1,

  },
});
