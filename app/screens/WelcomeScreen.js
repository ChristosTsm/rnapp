import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Platform,
  ImageBackground,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppText from "../components/AppText";
import Heading from "../components/Heading";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      {Platform.OS === "ios" ? (
        <ImageBackground
          source={require("../assets/ios/topblob.png")}
          style={styles.blob}
        />
      ) : (
        <ImageBackground
          source={require("../assets/android/drawable-hdpi/blob.png")}
          style={styles.blob}
        />
      )}
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        {/* <Heading style={styles.slogan}>Make it Happen.</Heading> */}
      </View>
      <View style={styles.buttonsWrapper}>
        <AppButton
          text={"Σύνδεση με Gmail"}
          iconName="google"
          iconSize={18}
          iconColor={colors.primary}
        />
        <AppButton
          text={"Σύνδεση με Facebook"}
          iconName="facebook"
          iconSize={18}
          iconColor={colors.primary}
        />
        <AppButton
          text={"Συνέχεια ως επισκέπτης"}
          iconName="guest"
          iconSize={18}
          iconColor={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: colors.primary,
  },
  logoWrapper: {
    position: "absolute",
    top: 120,
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
  },
  slogan: {
    marginTop: 50,
  },
  buttonsWrapper: {
    marginTop: 200,
    width: "100%",
    alignItems: "center",
    zIndex: 1,
  },
  blob: {
    position: "absolute",
    width: "100%",
    maxHeight: "85%",
    bottom: 0,
    resizeMode: "contain",
    // justifyContent: "center",
    height: "100%",
  },
});

export default WelcomeScreen;
