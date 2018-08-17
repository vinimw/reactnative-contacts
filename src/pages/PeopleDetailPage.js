import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class PeopleDetailPage extends React.Component {
	render() {
		const { people } = this.props.navigation.state.params;

		return (
			<View>
				<View style={styles.frame}>
					<Image source={{ uri: people.picture.large}} style={styles.avatar} />
				</View>
				<Text>I arrived here Detail</Text>
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
	}
});