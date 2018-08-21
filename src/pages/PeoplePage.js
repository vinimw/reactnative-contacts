import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
// import Header from '../components/Header';
import PeopleList from '../components/PeopleList';
import Axios from 'axios';

export default class PeoplePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      people: [],
      loading: false,
      error: false,
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
      })
      .catch(error => {
        this.setState({ 
          error: true,
          loading: false,
        });
      });
  }

  renderLoading() {
    if (this.state.loading)
      return <ActivityIndicator size="large" color="#5d85f9" />;
    return null;
  }

  render() {
    // this.props.navigation.navigate('PeopleDetail');
    return (
      <View style={styles.container}>
        {
          this.state.loading
            ? <ActivityIndicator size="large" color="#5d85f9" />
            : this.state.error 
                ? <Text style={styles.error}>Ops. Something wrong.</Text>
                : <PeopleList people={ this.state.people } onClick={pageParams => { this.props.navigation.navigate('PeopleDetail', pageParams); }}  />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18
  }
});
