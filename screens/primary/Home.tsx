import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import { AntDesign } from "@expo/vector-icons";
type Item = {
  title?: string;
  id?: number;
};
const Home = () => {
  let today = new Date();
  let day = today.getDay();
  let date = today.getDate();
  let hours = today.getHours();
  let month = today.getMonth();
  const [greeting,setGreeting]=useState<string>()
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
const myColor =`rgba(${red}, ${green}, ${blue},0.5)`;
  

  useEffect(()=>{
    (hours < 12)? setGreeting("GoodMorning") :
    ((hours <= 18 && hours >= 12 ) ?  setGreeting("GoodAfternoon") :  setGreeting("GoodEvening"));
  },[])
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
  const renderitem = ({ item }: Item) => {
    return (
      <View style={styles.meetingcontainer}>
        <Text style={styles.meetingcontainerheader}>{"Meeting"}</Text>
        <Text style={styles.meetingcontainertitle}>{item.title}</Text>
        <Text style={styles.meetingcontainertime}>{"09 AM - 11 AM"}</Text>
        <View style={styles.meetingcontainerbottom}>
          <View style={styles.meetingcontainerleft}></View>
          <View style={styles.meetingcontainerright}>
            <AntDesign
              name="edit"
              size={20}
              style={{ marginRight: 20, padding: 10 }}
              color="black"
            />
            <AntDesign name="delete" size={20} color="red" />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.greetingscontainer}>
        <Text style={styles.greetingstext}>{greeting} Louis 👋</Text>
      </View>

      <View style={[styles.schedulebubblecontainer,{backgroundColor:myColor}]}>
        <View style={styles.schedulebubble}>
          <Text style={styles.bubbleheader}>New Invitation</Text>
          <Text style={styles.bubbletext}>create invitation link</Text>
          <Button
            backgroundColor="#2568cc"
            text="Send Invitation"
            borderRadius={10}
            height={50}
            justifyContent="center"
            alignItems="center"
            color="#fff"
            elevation={5}
            rippleColor="5d91c2"
            fontWeight="bold"
            marginTop={20}
            fontSize={17}
            icon="send-circle"
            iconcolor="#fff"
            iconsize={20}
            flexDirection="row"
            onPress={() => console.log("Invite sent")}
          />
        </View>
      </View>
      <View style={styles.meetingscontainermain}>
        <View style={styles.meetingscontainerheader}>
          <Text style={styles.headerday}>{daylist[day]}</Text>
          <Text style={styles.headerdate}>{date}</Text>
          <Text style={styles.headermonth}>{monthNames[month]}</Text>
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
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09090c",
  },
  greetingscontainer: {
    marginTop:0,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  greetingstext: {
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 22,
    color: "#fff",
  },
  schedulebubblecontainer: {
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
    color: "#fff",
    fontWeight: "bold",
  },
  bubbletext: {
    fontSize: 16,
    marginTop: 5,
    color: "#fff",
  },
  meetingscontainermain: {
    marginTop: 20,
  },
  meetingscontainerheader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    paddingBottom:10
  },
  headerday: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 5,
  },
  headerdate: {
    color: "#fff",
    fontSize: 20,
    marginRight: 5,
  },
  headermonth: {
    color: "#ffffff",
    fontSize: 20,
  },
  meetingscontainerbody: {},
  meetingcontainer: {
    borderRadius: 15,
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  meetingcontainerheader: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  meetingcontainertitle: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold",
    color: "#09090c",
  },
  meetingcontainertime: {
    marginLeft: 10,
    marginBottom: 5,
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
  },
  meetingcontainerright: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
});
