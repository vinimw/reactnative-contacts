import React from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = (props) => {
	const { people, onClick } = props;

	return (
		<FlatList style={ styles.container } data={ people } 
			renderItem={ ({ item }) => (<PeopleListItem people={item} peopleDetail={onClick} />)} 
			keyExtractor={item => item.login.uuid}
			/>
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