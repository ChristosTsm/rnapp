import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import Heading from "../components/Heading";

// import colors from "../config/colors";

export default function SplashScreen() {
  return (
    <View style={styles.splashContainer}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      {/* <Heading>Κερδίστε χώρο,</Heading>
      <Heading>Χαρίστε χαμόγελα</Heading> */}
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    top: 50,
  },
});
