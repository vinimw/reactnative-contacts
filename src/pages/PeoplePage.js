import React from 'react';
import { Text, View } from 'react-native';
import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import Axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    Axios
      .get('https://randomuser.me/api/?results=7&nat=br')
      .then( response => {
        const { results } = response.data;
        this.setState({
          people: results
        });
      });
  }

  render() {
    return (
      <View>
        <Header title="header test a" />
        <PeopleList people={ this.state.people } />
      </View>
    );
  }
}