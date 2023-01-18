import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { PopupContext } from "../context/PopupContext";

const CustomAlert = ({ message, onContinue, onCancel }) => {
  const { customealertvisible, setCustomAlertVisible } =
    useContext(PopupContext);

  return (
    <View>
      <Modal isVisible={customealertvisible}>
        <View
          style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
        >
          <Text>{message}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={onContinue}>
              <Text>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onCancel}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomAlert;
