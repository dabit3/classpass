import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Main from './app/Main/Main';
import Intro from './app/Intro/Intro';

export default class RNClassPassIntro extends Component {
  state = {
    loggedIn: false,
  }
  createAccount = () => {
    console.log('createAccount called')
  }
  subscribe = () => {
  }
  render() {
    return (
      <View style={styles.container}>
        {
          !this.state.loggedIn ? (
            <Intro
             screenProps={{
               createAccount: this.createAccount
             }}
            />
          ) : (
            <Main screenProps='Hello world' />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('RNClassPassIntro', () => RNClassPassIntro);
