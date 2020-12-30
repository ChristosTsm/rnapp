import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Zocial } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";

const AppButton = (props) => {
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

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 12,
    width: "85%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  text: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "600",
  },
});
