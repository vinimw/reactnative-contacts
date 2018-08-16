import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CaptFirstLetter } from '../utils';


const PeopleLisItem = props => {
	const { people } = props;
	const { first, last } = people.name;

	return (
		<TouchableOpacity onPress={() => console.log('clicked')}>
			<View style={ styles.list }>
				<Image style={ styles.avatar } source={{ uri: people.picture.thumbnail }} />
				<Text style={ styles.lineText } >{ `${CaptFirstLetter(first)} ${CaptFirstLetter(last)}` }</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	list: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#CCC',
		alignItems: 'center',
		flexDirection: 'row'
	},
	lineText: {
		fontSize: 20,
		paddingLeft: 15,
		flex: 7
	},
	avatar: {
		aspectRatio: 1,
		flex: 1,
		marginLeft: 5,
		borderRadius: 50
	}
});

export default PeopleLisItem;