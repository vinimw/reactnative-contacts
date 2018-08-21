import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import Axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      people: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    Axios
      .get('https://randomuser.me/api/?results=100&nat=br')
      .then( response => {
        const { results } = response.data;
        this.setState({
          people: results,
          loading: false,
        });
      });
  }

  render() {
    // this.props.navigation.navigate('PeopleDetail');
    return (
      <View>
        {
          this.state.loading
            ? <ActivityIndicator size="large" color="#5d85f9" />
            : null
        }
        <PeopleList
          people={ this.state.people }
          onClick={pageParams => {
            this.props.navigation.navigate('PeopleDetail', pageParams);
          }}  />
      </View>
    );
  }
}
