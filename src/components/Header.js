import React from 'react';
import { Text, View } from 'react-native';

const styleHeader = {
	backgroundColor: '#264676',
	width: '100%',
	marginTop: 25,
	paddingTop: 10,
	paddingBottom: 10
}

const styleText = {
	color: '#FFFFFF',
	fontSize: 20,
	textAlign: 'center',
	width: '100%'
}

const Header = (props) => (
	<View style={styleHeader}>
		<Text style={styleText}>{ props.title }</Text>
	</View>
);


export default Header;