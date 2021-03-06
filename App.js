import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

export default createStackNavigator ({
	'Main': {
		screen: PeoplePage
	},
	'PeopleDetail': {
		screen: PeopleDetailPage,
		navigationOptions: ({navigation}) => {
			const personName = navigation.state.params.people.name.first;
			return ({
				title: personName	
			});
		}
	}
}, {
	navigationOptions: {
		title: 'People!',
		headerTintColor: '#FFF',
		headerStyle: {
			backgroundColor: '#264676',
			borderBottomWidth: 1,
			borderBottomColor: '#EEE'
		},
		headerTitleStyle: {
			color: '#FFF',
			fontSize: 30,
			alignSelf: 'center',
		}
	}
});

// export default PeoplePage;