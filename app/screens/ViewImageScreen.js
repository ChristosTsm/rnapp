import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
	return (
		<View style={styles.container}>
			<View style={styles.closeIcon}>
				<AntDesign name="close" size={18} color={colors.white} />
			</View>
			<View style={styles.deleteIcon}>
				<AntDesign name="delete" size={18} color={colors.white} />
			</View>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={require("../assets/photo.jpg")}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	closeIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.primary,
		position: "absolute",
		top: 60,
		left: 30,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	deleteIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.secondary,
		position: "absolute",
		top: 60,
		right: 30,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		flex: 1,
		backgroundColor: colors.black,
	},
	image: {
		width: "100%",
		height: "100%",
	},
});

export default ViewImageScreen;
