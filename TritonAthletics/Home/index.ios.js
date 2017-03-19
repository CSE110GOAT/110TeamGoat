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
import Header from './Header'
import NavBar from './NavBar'
import Indiv from './GameNavigator'
import HomeNav from './HomeNav'
import Explore from './Explore'
import NavFuture from './NavFuture'
import FutureGame from './FutureGame'
import GamePreview from './GamePreview'

export default class TrialProject extends Component {
  constructor(){
    super()



  }


  render() {
    return (
    <NavBar/> )
  }
}


AppRegistry.registerComponent('TrialProject', () => TrialProject);
