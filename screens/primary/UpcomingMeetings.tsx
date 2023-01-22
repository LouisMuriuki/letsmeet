import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableNativeFeedback,
} from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Meeting from "../../Meeting.json";
import theme from "../../theme/theme";
import { AntDesign } from "@expo/vector-icons";
import { PopupContext } from "../../context/PopupContext";
import CustomAlert from "../../components/CustomAlert";
interface Meeting {
  date: string;
  day: string;
  time: string;
  title: string;
  attendant: string;
  id: number;
}
interface Props {
  meetings: Meeting[];
}
const UpcomingMeetings = ({ navigation }) => {
  console.log(Meeting);
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  const { customealertvisible, setCustomAlertVisible } =
    useContext(PopupContext);
  const renderItem = ({ item }: { item: Meeting }) => {
    return (
      <View
        style={[
          styles.meetingcontainer,
          {
            backgroundColor: darkmode
              ? theme.dark.secondarybg
              : theme.light.secondarybg,
          },
        ]}
      >
        <View style={styles.itemcontainer}>
          <View style={styles.left}>
            <View style={[styles.leftcolor, {}]}></View>
            <View style={styles.leftitem}>
              <Text style={styles.date}>{"06 THUR"}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <View style={styles.verticleLine}></View>
          </View>
          <View style={styles.center}>
            <View style={styles.centeritem}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.attendant}>Attendant: {item.attendant}</Text>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.rightitem}>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("#FF7D54", false)}
              >
                <AntDesign
                  name="edit"
                  size={20}
                  style={styles.editicon}
                  color="black"
                  onPress={() => navigation.navigate("MeetingInvitation")}
                />
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("#FF7D54", false)}
              >
                <AntDesign
                  name="delete"
                  style={styles.deleteicon}
                  onPress={() => setCustomAlertVisible(true)}
                  size={18}
                  color="red"
                />
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkmode
            ? theme.dark.background
            : theme.light.background,
        },
      ]}
    >
      <FlatList
        data={Meeting}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />
      <CustomAlert
        message="Are you sure you want to cancel this meeting reservation ?"
        onContinue={() => console.log("Continue clicked")}
        onCancel={() => setCustomAlertVisible(false)}
      />
    </View>
  );
};

export default UpcomingMeetings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  meetingcontainer: {
    flex: 1,
    flexDirection: "row",
    height: 90,
    borderRadius: 5,
    margin: 3,
    marginTop: 10,
  },
  itemcontainer: {
    flexDirection: "row",
    flex: 7,
  },
  left: {
    flexDirection: "row",
    flex: 2,
  },
  center: {
    flexDirection: "row",
    flex: 4,
  },
  right: {
    flexDirection: "row",
    flex: 1,
  },
  leftcolor: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 5,
    backgroundColor: "#FF7D54",
  },
  leftitem: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  verticleLine: {
    position: "absolute",
    left: 90,
    height: "90%",
    marginTop:5,
    width: 1,
    backgroundColor: "#909090",
  },
  centeritem: {
    justifyContent: "center",

    width: "100%",
    flexDirection: "column",
  },
  date: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold",
  },
  time: {},
  title: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold",
  },
  attendant: {},
  rightitem: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  editicon: {
    marginBottom: 20,
  },
  deleteicon: {},
});
