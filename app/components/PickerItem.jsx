import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textTransform: "capitalize",
    padding: 20,
    textAlign: "center",
  },
});

export default PickerItem;
