import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Header from './Header'
import PastGame from './Game'
import Status from './Status'
import NavBar from './NavBar'


export default class Explore extends Component {



  render() {
    return (
      <View style = {styles.indivcontainer}>
       <Text> This is the Explore Page </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  indivcontainer: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }


});

AppRegistry.registerComponent('Explore', () => Explore);
