import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import LineInfo from '../components/LineInfo';

export default class PeopleDetailPage extends React.Component {
	render() {
		const { people } = this.props.navigation.state.params;

		return (
			<ScrollView style={styles.frame}>
				<Image source={{ uri: people.picture.large}} style={styles.avatar} />
				
				<View style={styles.table}>

					<LineInfo label="E-mail:" content={ people.email } ></LineInfo>

					<LineInfo label="Phone:" content={ people.phone } ></LineInfo>

					<LineInfo label="Cell:" content={ people.cell } ></LineInfo>

					<LineInfo label="Street:" content={ people.location.street } ></LineInfo>

					<LineInfo label="City:" content={ people.location.city } ></LineInfo>

					<LineInfo label="State:" content={ people.location.state } ></LineInfo>

					<LineInfo label="Postcode:" content={ people.location.postcode } ></LineInfo>

					<LineInfo label="Age:" content={ people.dob.age } ></LineInfo>
				</View>
			</ScrollView>
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
	}
});