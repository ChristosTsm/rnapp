import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default AppText;
