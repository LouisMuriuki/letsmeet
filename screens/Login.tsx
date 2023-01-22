import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Images from "../components/Images";


const Login = () => {
    const woman1 = require("../assets/woman1.jpg");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const windowWidth = Dimensions.get('window').width;
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: "#ffffff" }}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Images width={windowWidth} height={300} image={woman1} />
        </View>

        <View style={styles.logintext}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "900",
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            MGENI KARIBU
          </Text>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>
            Enter your Email and password
          </Text>
          {/* {error ? (
              <View style={{ marginTop: 40, marginBottom: 10 }}>
                <Text style={{ color: "red", fontSize: 16 }}>{error}</Text>
              </View>
            ) : null} */}
        </View>
        <View style={styles.loginform}>
          <Text style={{ marginBottom: 10 }}>Email:</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            placeholder="johndoe@gmail.com"
            value={email}
            onChangeText={(e) => setEmail(e)}
          ></TextInput>
          <Text style={{ marginBottom: 10 }}>Password:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            autoCorrect={false}
            placeholder="*********"
            value={password}
            onChangeText={(e) => setPassword(e)}
          ></TextInput>
          <View style={styles.btncontainer}>
            <Pressable
              onPress={() => {
                console.log("pressed me");
              }}
              style={styles.Scanbtn}
              android_ripple={{ color: "#FFD994", borderless: true }}
            >
              {/* {isLoading ? (
                  <View style={styles.loader}>
                    <Text style={styles.text}>Logging in</Text>
                    <ActivityIndicator size="small" color="#ffffff" />
                  </View>
                ) : (
                  <Text style={styles.text}>Login</Text>
                )} */}
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  top: {
    flex: 4,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  logintext: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginform: {
    flex: 4,
    marginHorizontal: 10,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: 40,
    borderColor: "#B2BEB5",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 40,
  },
  btncontainer: {
    elevation: 1,
    borderRadius: 5,
    marginBottom: 90,
    marginHorizontal: 30,
  },
  Scanbtn: {
    backgroundColor: "#FFA500",
    alignItems: "center",
    borderRadius: 5,
    height: 35,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginRight: 10,
  },
});
