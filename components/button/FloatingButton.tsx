import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onPress: () => void;
}

const FloatingPlusButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#2196F3",
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Ionicons name="ios-add" size={32} color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatingPlusButton;
