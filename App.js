import React from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';
import Axios from 'axios';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    Axios
      .get('https://randomuser.me/api/?results=10&nat=br')
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
