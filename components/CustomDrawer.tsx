import React, { useContext } from "react";
import * as StoreReview from "expo-store-review";
import {
  Share,
  Text,
  View,
  StyleSheet,
  Image,
  Switch,
  Linking,
  TouchableNativeFeedback,
} from "react-native";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import theme from "../theme/theme";
const RateUs = async () => {
  if (await StoreReview.isAvailableAsync()) {
    StoreReview.requestReview()
      .then(function (response) {
        console.log("response is", response);
      })
      .catch((e) => {
        if (e instanceof Error) {
          console.log(e);
        }
      });
  }
};
const ShareApp = async () => {
  const url =
    "https://play.google.com/store/apps/details?id=com.muriuki.AIOS&hl=en&gl=US";
  try {
    const result = await Share.share({
      title: "App link",
      message:
        "Please install this app and stay safe , AppLink :https://play.google.com/store/apps/details?id=com.muriuki.AIOS&hl=en&gl=US",
      url: "https://play.google.com/store/apps/details?id=com.muriuki.AIOS&hl=en&gl=US",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
      } else {
      }
    } else if (result.action === Share.dismissedAction) {
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  }
};
const CustomDrawer = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: darkmode
          ? theme.dark.background
          : theme.light.background,
      }}
    >
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            height: 300,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 0,
            backgroundColor: "#FF7D54",
          }}
        >
          <Image
            source={require("../assets/drawericon.png")}
            style={{ width: "100%", height: 270 }}
          />
        </View>
      </View>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#FF7D54", false)}
      >
        <View
          style={styles.draweritem}
          onTouchStart={() =>
            Linking.openURL(
              "https://play.google.com/store/apps/details?id=com.muriuki.AIOS&showAllReviews=true"
            )
          }
        >
          <MaterialIcons name="star-rate" size={28} color="#FF7D54" />
          <Text
            style={[
              styles.drawertext,
              {
                color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
              },
            ]}
          >
            Rate Us
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#FF7D54", false)}
      >
        <View
          style={styles.draweritem}
          onTouchStart={() =>
            Linking.openURL(
              "https://pages.flycricket.io/all-in-one-scanner-1/privacy.html"
            )
          }
        >
          <MaterialIcons name="privacy-tip" size={28} color="#FF7D54" />
          <Text
            style={[
              styles.drawertext,
              {
                color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
              },
            ]}
          >
            Privacy Policy
          </Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("#FF7D54", false)}
      >
        <View style={styles.draweritem} onTouchStart={ShareApp}>
          <Entypo name="share" size={28} color="#FF7D54" />
          <Text
            style={[
              styles.drawertext,
              {
                color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
              },
            ]}
          >
            Share with Friends
          </Text>
        </View>
      </TouchableNativeFeedback>
      <View style={styles.bottom}>
        <View style={styles.draweritembottom}>
          <Text
            style={[
              styles.drawertext,
              {
                color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
              },
            ]}
          >
            Dark Mode
          </Text>
          <Switch
            value={darkmode}
            onValueChange={(value) => {
              setDarkMode(value);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  draweritem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    paddingLeft: 20,
    height: 45,
  },
  drawertext: {
    fontSize: 20,
    paddingLeft: 20,
  },
  bottom: {
    position: "absolute",
    bottom: 2,
  },

  draweritembottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingLeft: 20,
    height: 45,
  },
});
