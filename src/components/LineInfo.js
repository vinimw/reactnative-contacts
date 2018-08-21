import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LineInfo = ({ label, content }) => {
	return(
		<View style={styles.row}>
			<Text style={styles.colTitle}>{ label }</Text>
			<Text style={styles.colResult}>{ content }</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	
	row: {
		padding: 15,
		borderBottomWidth : 1,
		borderColor: '#eeeeee',
		flexDirection: 'row'
	},
	colTitle: {
		flex: 3,
		fontWeight: 'bold'
	},
	colResult: {
		flex: 9,
	}
});

export default LineInfo;