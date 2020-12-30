import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Zocial } from "@expo/vector-icons";
import AppText from "./AppText";

import colors from "../config/colors";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <AppText style={styles.text}>{props.text}</AppText>
      <Zocial
        style={styles.icon}
        name={props.iconName}
        size={props.iconSize}
        color={props.iconColor}
      />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
    marginVertical: 12,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 5,
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "600",
  },
});
