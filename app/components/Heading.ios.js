import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";

function Heading(props) {
  return <Text style={styles.heading}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  heading: {
    color: colors.primary,
    fontSize: 40,
    fontFamily: "Helvetica Neue",
    fontWeight: "200",
  },
});

export default Heading;
