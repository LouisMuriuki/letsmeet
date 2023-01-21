import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import theme from "../../theme/theme";
import People from "../../people.json";
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeContext } from "../../context/ThemeContext";
interface Visitors {
  name: String;
  checkInTime: String;
  id: Number;
  phoneNumber: String;
  title: String;
}
const CheckedInList = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  const renderItem = ({ item }: { item: Visitors }) => {
    return (
      <View
        style={[
          styles.checkin_container,
          {
            backgroundColor: darkmode
              ? theme.dark.secondarybg
              : theme.light.secondarybg,
          },
        ]}
      >
        <View style={styles.checkin_inner_container}>
          <View style={styles.left}>
            <View style={[styles.leftcolor, {}]}></View>
            <View style={styles.leftitem}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.center}>
            <View style={styles.centeritem}>
              <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
              <Text style={styles.time}>{item.checkInTime}</Text>
            </View>
          </View>
          <View style={styles.right}>
            <View style={styles.rightitem}>
              <TouchableOpacity style={styles.check}>
              <FontAwesome5 name="check" size={18} color="black" />
              </TouchableOpacity>
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
        data={People}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      />
    </View>
  );
};

export default CheckedInList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkin_container: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    borderRadius: 5,
    margin: 3,
    marginTop: 10,
  },
  checkin_inner_container: {
    flexDirection: "row",
    flex: 5,
  },
  left: {
    flexDirection: "row",
    flex: 2,
  },
  leftcolor: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: 5,
    backgroundColor: "#FF7D54",
  },
  center: {
    flexDirection: "row",
    flex: 2,
  },
  right: {
    flexDirection: "row",
    flex: 1,
  },
  centeritem: {
    justifyContent: "space-between",
    paddingVertical: 5,
    flexDirection: "column",
  },
  rightitem: {
    height: "auto",
    justifyContent: "center",
    paddingVertical: 5,
    paddingRight: 10,
    flexDirection: "column",
  },
  leftitem: {
    height: "auto",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingVertical: 5,
    flexDirection: "column",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
  },
  phoneNumber: {
    fontSize: 16,
  },
  time: {
    fontSize: 16,
  },
  check: {
    backgroundColor: "#228B22",
    width: 36,
    height: 36,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
});
