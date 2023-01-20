import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FloatingPlusButton from "../../components/button/FloatingButton";
import Button from "../../components/button/Button";

const SecondaryHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={{ fontSize: 24, fontWeight: "900", marginBottom: 20 }}>
          All in One Scanner
        </Text>
        <Text style={{ fontSize: 16 }}>
          Please place the Bar/Qr code in 
        </Text>
        <Text style={{ fontSize: 16 }}>the image view so that we </Text>
        <Text style={{ fontSize: 16 }}>can scan it for you.</Text>
      </View>
      <View style={styles.btncontainer}>
          <Button
        text="QR CODE"
        color="#ffffff"
        elevation={1}
        borderRadius={5}
        marginBottom={40}
        marginHorizontal={30}
        backgroundColor="#FF7D54"
        alignItems="center"
        justifyContent="center"
        height={55}
        fontSize={20}
        fontWeight="bold"
        onPress={()=> navigation.navigate('QR-Scanner')}
      />
      </View>
      <FloatingPlusButton onPress={()=>navigation.navigate("NewGuest")} />
    </View>
  );
};

export default SecondaryHome;

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btncontainer: {
    flex: 1,
  },
});
