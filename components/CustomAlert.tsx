import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { PopupContext } from "../context/PopupContext";
import { MaterialIcons } from "@expo/vector-icons";

interface Props{
  message:string,
  onContinue:()=>void,
  onCancel:()=>void
}
const CustomAlert = ({ message, onContinue, onCancel }:Props) => {
  const { customealertvisible, setCustomAlertVisible } =
    useContext(PopupContext);

  return (
    <View>
      <Modal
        isVisible={customealertvisible}
        animationIn={"slideInDown"}
        animationOut={"fadeOutDown"}
      >
        <View
          style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: 10,
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Cancel Meeting?
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 10,
              }}
            >
              <MaterialIcons
                name="clear"
                onPress={onCancel}
                size={24}
                style={{ fontWeight: "bold" }}
                color="red"
              />
            </View>
          </View>
          <Text style={{ fontSize: 15 }}>{message}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={onCancel}>
              <Text style={{ fontSize: 16 }}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onContinue}>
              <Text style={{ fontSize: 16, color: "red" }}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomAlert;
