import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";

function Heading(props) {
  return <Text style={styles.heading}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    color: colors.primary,
    fontSize: 32,
    fontFamily: "Roboto",
  },
});

export default Heading;
