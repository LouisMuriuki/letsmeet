import { StyleSheet, Text, View,FlatList } from 'react-native'
import React ,{useContext}from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import Meeting from "../../Meeting.json";
import theme from "../../theme/theme";

interface Meeting {
  date: string;
  day: string;
  time: string;
  title: string;
  attendant: string;
  id: number;
}
const PastMeetings = () => {
  console.log(Meeting);
  const { darkmode, setDarkMode } = useContext(ThemeContext);
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
    </View>
  );
};

export default PastMeetings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  meetingcontainer: {
    flex: 1,
    flexDirection: "row",
    height: 80,
    borderRadius: 5,
    margin: 3,
    marginTop:10
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
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    width: 5,
    backgroundColor: "#cf1039",
  },
  leftitem: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  verticleLine: {
    position: "absolute",
    left: 90,
    height: "100%",
    paddingVertical: 10,
    width: 1,
    backgroundColor: "#909090",
  },
  centeritem: {
    justifyContent: "center",
    paddingVertical: 10,
    width:"100%",
    flexDirection: "column",
  },
  date: {
    fontSize: 16,
    marginBottom:10,
    fontWeight: "bold",
  },
  time: {
  
  },
  title:{
    fontSize: 16,
    marginBottom:10,
    fontWeight: "bold",
  },
  attendant:{

  },
  rightitem: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  editicon:{
    marginBottom:10,
  },
  deleteicon:{
  }
});