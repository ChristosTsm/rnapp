import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import Heading from "../components/Heading";

import colors from "../config/colors";

function WelcomeScreen(props) {
	return (
		<ImageBackground
			resizeMode="cover"
			style={styles.background}
			source={require("../assets/background.jpg")}
		>
			<View style={styles.logoWrapper}>
				<Image
					style={styles.logo}
					source={require("../assets/logo.png")}
				/>
				<Heading style={styles.slogan}>Make it Happen.</Heading>
			</View>
			<View style={styles.loginButton}></View>
			<View style={styles.registerButton}></View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	loginButton: {
		width: "100%",
		height: 70,
		// backgroundColor: colors.secondary,
	},
	registerButton: {
		width: "100%",
		height: 70,
		// backgroundColor: colors.primary,
	},
	logo: {
		width: 250,
		height: 250,
	},
	logoWrapper: {
		position: "absolute",
		top: 120,
		alignItems: "center",
	},
	slogan: {
		marginTop: 50,
	},
});

export default WelcomeScreen;
