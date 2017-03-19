

/**
 * Trial  React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator
} from 'react-native';

import MyScene from './MyScene'
import GamePreview from './GamePreview'
import Header from '../Header'
import GameNavigator from './GameNavigator'
import NavFuture from './NavFuture'



export default class HomeNav extends Component {
  constructor(){
    super()
  }


  render() {
    return (
      <Navigator
        initialRoute={{id: 'first'}}
        renderScene={(route, navigator) => {
          _navigator = navigator;
          switch (route.id) {
            case 'first':
              return (<MyScene navigator={navigator} title="first" />);
            case 'second':
              return (<GameNavigator navigator={navigator} title="second" sport={route.sport} loc ={route.loc} team2 = {route.team2} date = {route.date} time = {route.time} score = {route.score}
                      stats = {route.stats} notes = {route.notes} latitude = {route.latitude} longitude = {route.longitude} gender = {route.gender}
              />);
            case 'third':
              return (<NavFuture navigator={navigator} title="third" sport={route.sport} loc ={route.loc} team2 = {route.team2}
                       stats = {route.stats} notes = {route.notes} gender = {route.gender} date = {route.date} time = {route.time}
                     latitude = {route.latitude} longitude = {route.longitude}  />);
          }
        }
      }
    />);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'

  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 80,
    backgroundColor: '#00008b'
  },
  time: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 40,
    backgroundColor: 'white'
  },
  title: {
    justifyContent: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: "Didot"
  }
});

AppRegistry.registerComponent('HomeNav', () => HomeNav);
