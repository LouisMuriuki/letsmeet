import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import theme from "../theme/theme";
const Form = () => {
  const { darkmode, setDarkMode } = useContext(ThemeContext);
  const [hostName, setHostName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = () => {
    // Code to handle form submission
  };

  return (
    <ScrollView
      style={
        (styles.scrollcontainer,
        {
          backgroundColor: darkmode
            ? theme.dark.background
            : theme.light.background,
        })
      }
    >
      <View style={styles.container}>
        <Text
          style={[
            styles.label,
            {
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
        >
          Host Name
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: darkmode
                ? theme.dark.inputbg
                : theme.light.inputbg,
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
          onChangeText={(text) => setHostName(text)}
          value={hostName}
          placeholder="Enter host name"
          placeholderTextColor={
            darkmode
              ? theme.dark.placeholderTextColor
              : theme.light.placeholderTextColor
          }
        />

        <Text
          style={[
            styles.label,
            {
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
        >
          Recipient Email
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: darkmode
                ? theme.dark.inputbg
                : theme.light.inputbg,
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
          onChangeText={(text) => setRecipientEmail(text)}
          value={recipientEmail}
          placeholder="Enter recipient email"
          keyboardType="email-address"
          placeholderTextColor={
            darkmode
              ? theme.dark.placeholderTextColor
              : theme.light.placeholderTextColor
          }
        />

        <Text
          style={[
            styles.label,
            {
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
        >
          Location
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: darkmode
                ? theme.dark.inputbg
                : theme.light.inputbg,
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
          onChangeText={(text) => setLocation(text)}
          value={location}
          placeholder="Enter location"
          placeholderTextColor={
            darkmode
              ? theme.dark.placeholderTextColor
              : theme.light.placeholderTextColor
          }
        />

        <Text
          style={[
            styles.label,
            {
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
        >
          Company
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: darkmode
                ? theme.dark.inputbg
                : theme.light.inputbg,
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
          onChangeText={(text) => setCompany(text)}
          value={company}
          placeholder="Enter company name"
          placeholderTextColor={
            darkmode
              ? theme.dark.placeholderTextColor
              : theme.light.placeholderTextColor
          }
        />

        <Text
          style={[
            styles.label,
            {
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
        >
          Date
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: darkmode
                ? theme.dark.inputbg
                : theme.light.inputbg,
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
          onChangeText={(text) => setDate(text)}
          value={date}
          placeholder="Enter date"
          keyboardType="numeric"
          placeholderTextColor={
            darkmode
              ? theme.dark.placeholderTextColor
              : theme.light.placeholderTextColor
          }
        />

        <Text
          style={[
            styles.label,
            {
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
        >
          Start Time
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: darkmode
                ? theme.dark.inputbg
                : theme.light.inputbg,
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
          onChangeText={(text) => setStartTime(text)}
          value={startTime}
          placeholder="Enter start time"
          placeholderTextColor={
            darkmode
              ? theme.dark.placeholderTextColor
              : theme.light.placeholderTextColor
          }
        />

        <Text
          style={[
            styles.label,
            {
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
        >
          End Time
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              backgroundColor: darkmode
                ? theme.dark.inputbg
                : theme.light.inputbg,
              color: darkmode ? theme.dark.textcolor : theme.light.textcolor,
            },
          ]}
          onChangeText={(text) => setEndTime(text)}
          value={endTime}
          placeholder="Enter end time"
          placeholderTextColor={
            darkmode
              ? theme.dark.placeholderTextColor
              : theme.light.placeholderTextColor
          }
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Form;
const styles = StyleSheet.create({
  scrollcontainer: {
    flex: 1,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    paddingLeft: 15,
    marginBottom: 20,
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#0066CC",
    padding: 10,
    marginHorizontal: 40,
    borderRadius: 5,
    elevation: 5,

    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
