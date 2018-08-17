import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class PeopleDetailPage extends React.Component {
	render() {
		const { people } = this.props.navigation.state.params;

		return (
			<View style={styles.frame}>
				<Image source={{ uri: people.picture.large}} style={styles.avatar} />
				
				<View style={styles.table}>
					<View style={styles.row}>
						<Text style={styles.colTitle}>E-mail:</Text>
						<Text style={styles.colResult}>{ people.email }</Text>
					</View>

					<View style={styles.row}>
						<Text style={styles.colTitle}>Phone:</Text>
						<Text style={styles.colResult}>{ people.phone }</Text>
					</View>

					<View style={styles.row}>
						<Text style={styles.colTitle}>Cell:</Text>
						<Text style={styles.colResult}>{ people.cell }</Text>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	avatar: {
		aspectRatio: 1,
		borderRadius: 50
	},
	frame: {
		padding: 10
	},
	table: {
		backgroundColor: '#f4f4f4',
		elevation: 1,
		marginTop: 20
	},
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