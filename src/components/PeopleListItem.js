import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CaptFirstLetter } from '../utils';


const PeopleLisItem = props => {
	const { people } = props;
	const { first, last } = people.name;

	return (
		<View style={ styles.list }>
			<Text>{ `${CaptFirstLetter(first)} ${CaptFirstLetter(last)}` }</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#CCC'
	}
});

export default PeopleLisItem;