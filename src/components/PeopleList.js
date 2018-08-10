import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
	const { people } = props;

	const items = people.map( (person, index) => {
		return <PeopleListItem key={index} people={person} />
		
	});

	return (
		<View style={ styles.container }>
			{ items }
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f3f3f3'
	},
	list: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#CCC'
	}
});

export default PeopleList;