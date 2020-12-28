import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";

function Heading(props) {
	return <Text style={styles.heading}>{props.children}</Text>;
}

const styles = StyleSheet.create({
	heading: {
		color: colors.white,
		...Platform.select({
			ios: {
				fontSize: 40,
				fontFamily: "Avenir",
			},
			android: {
				fontSize: 36,
				fontFamily: "Roboto",
			},
		}),
	},
});

export default Heading;
