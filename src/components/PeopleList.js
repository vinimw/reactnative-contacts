import React from 'react';
import { Text, View } from 'react-native';

const PeopleList = (props) => {
	const { people } = props;
	const textelem = people.map( (person, index) => {
	  
	  const { first } = person.name;
	  return <Text key={index}>{ first }</Text>;

	});

	return (
		<View>
			{ textelem }
		</View>
	);
};

export default PeopleList;