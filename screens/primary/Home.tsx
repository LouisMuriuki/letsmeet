import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import Button from "../../components/button/Button";
import { AntDesign } from "@expo/vector-icons";
import { ThemeContext } from "../../context/ThemeContext";
import theme from "../../theme/theme";
import Images from "../../components/Images";
import { PopupContext } from "../../context/PopupContext";
import CustomAlert from "../../components/CustomAlert";
type Item = {
  title?: string;
  id?: string;
};
const Home = ({ navigation }) => {
  const man1 = require("../../assets/man1.jpg");
  const man2 = require("../../assets/man2.jpg");
  const woman1 = require("../../assets/woman1.jpg");
  let today = new Date();
  let day = today.getDay();
  let date = today.getDate();
  let hours = today.getHours();
  let month = today.getMonth();
  const [greeting, setGreeting] = useState<string>("");
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  const { customealertvisible, setCustomAlertVisible } =
    useContext(PopupContext);
  let daylist = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday ",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const red = 156;
  const green = 167;
  const blue = 189;
  const myColor = `rgba(${red}, ${green}, ${blue},0.5)`;

  useEffect(() => {
    hours < 12
      ? setGreeting("GoodMorning")
      : hours <= 18 && hours >= 12
      ? setGreeting("GoodAfternoon")
      : setGreeting("GoodEvening");
  }, []);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "3ac68afc-c605-48q3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-47qqf-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const renderitem = ({ item }: { item: Item }) => {
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
        <Text
          style={[
            styles.meetingcontainerheader,
            {
              color: darkmode
                ? theme.dark.headercolor
                : theme.light.headercolor,
            },
          ]}
        >
          {"Meeting"}
        </Text>
        <Text
          style={[
            styles.meetingcontainertitle,
            {
              color: darkmode ? theme.dark.titlecolor : theme.light.titlecolor,
            },
          ]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            styles.meetingcontainertime,
            { color: darkmode ? theme.dark.timecolor : theme.light.timecolor },
          ]}
        >
          {"09 AM - 11 AM"}
        </Text>
        <View style={styles.meetingcontainerbottom}>
          <View style={styles.meetingcontainerleft}>
            {<Images height={35} width={35} image={woman1} />}
            <Text style={{fontWeight:"500"}}> Joe Rwanda</Text>
          </View>
          <View style={styles.meetingcontainerright}>
            <AntDesign
              name="edit"
              size={22}
              onPress={() => navigation.navigate("MeetingInvitation")}
              style={{ marginRight: 20, padding: 10 }}
              color="black"
            />
            <AntDesign
              name="delete"
              size={22}
              onPress={() => setCustomAlertVisible(true)}
              color="red"
            />
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
      <View style={styles.greetingscontainer}>
        <Text
          style={[
            styles.greetingstext,
            { color: darkmode ? theme.dark.textcolor : theme.light.textcolor },
          ]}
        >
          {greeting}, Louis 👋
        </Text>
      </View>

      <View
        style={[styles.schedulebubblecontainer, { backgroundColor: myColor }]}
      >
        <View style={styles.schedulebubble}>
          <Text
            style={[
              styles.bubbleheader,
              {
                color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
              },
            ]}
          >
            New Invitation
          </Text>
          <View style={{ position: "absolute", right: -70, top: 20 }}>
            <Images height={35} width={35} image={woman1} />
          </View>
          <Text
            style={[
              styles.bubbletext,
              {
                color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
              },
            ]}
          >
            create invitation link
          </Text>
          <View style={{ position: "absolute", right: -120, top: 60 }}>
            <Images height={50} width={50} image={man2} />
          </View>
          <Button
            backgroundColor="#2568cc"
            text="Send Invitation"
            borderRadius={10}
            height={50}
            justifyContent="center"
            alignItems="center"
            color={"#fff"}
            elevation={5}
            rippleColor="5d91c2"
            fontWeight="bold"
            marginTop={20}
            fontSize={17}
            icon="send-circle"
            iconcolor={"#fff"}
            iconsize={20}
            flexDirection="row"
            onPress={() => navigation.navigate("MeetingInvitation")}
          />
          <View style={{ position: "absolute", right: -75, top: 130 }}>
            <Images height={60} width={60} image={man1} />
          </View>
        </View>
      </View>
      <View style={styles.meetingscontainermain}>
        <View style={styles.meetingscontainerheader}>
          <Text
            style={[
              styles.headerday,
              {
                color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
              },
            ]}
          >
            {daylist[day]}
          </Text>
          <Text
            style={[
              styles.headerdate,
              {
                color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
              },
            ]}
          >
            {date}
          </Text>
          <Text
            style={[
              styles.headermonth,
              {
                color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
              },
            ]}
          >
            {monthNames[month]}
          </Text>
        </View>
        <View style={styles.meetingscontainerbody}>
          <FlatList
            data={DATA}
            renderItem={renderitem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              paddingBottom: 120,
            }}
          />
        </View>
      </View>
      <CustomAlert
        message="Are you sure you want to cancel this meeting reservation ?"
        onContinue={() => console.log("Continue clicked")}
        onCancel={() => setCustomAlertVisible(false)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greetingscontainer: {
    marginTop: 0,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  greetingstext: {
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 22,
  },
  schedulebubblecontainer: {
    overflow: "hidden",
    height: 180,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  schedulebubble: {
    padding: 20,
    position: "absolute",
  },
  bubbleheader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bubbletext: {
    fontSize: 16,
    marginTop: 5,
  },
  meetingscontainermain: {
    marginTop: 20,
  },
  meetingscontainerheader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  headerday: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 5,
  },
  headerdate: {
    fontSize: 20,
    marginRight: 5,
  },
  headermonth: {
    fontSize: 20,
  },
  meetingscontainerbody: {},
  meetingcontainer: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  meetingcontainerheader: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 17,
    fontWeight: "bold",
  },
  meetingcontainertitle: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5,
  },
  meetingcontainertime: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 12,
  },

  meetingcontainerbottom: {
    marginTop: 10,
    flex: 3,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  meetingcontainerleft: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  meetingcontainerright: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
});
