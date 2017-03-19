'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator,
  ListView
} from 'react-native';
import ExplorePage from './ExplorePage.js'
import GenderSports from './GenderSports.js'
import Sport from './Sport.js'
import SportGames from './SportGames';
import Roster from './Roster';
import Stats from './Stats';

export default class PracticeProject extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Navigator
        initialRoute = {{id:'explore'}}
        renderScene = {(route, navigator) => {
          this._navigator = navigator;
          switch (route.id) {
            case 'explore':
              return (<ExplorePage navigator = {navigator} />);
            case 'men':
              return (<GenderSports navigator = {navigator} id = {0} />);
            case 'women':
              return (<GenderSports navigator = {navigator} id = {1} />);
            default:
              return (<Sport navigator = {navigator} 
                             id = {route.id} 
                             string = {route.sportid} 
                             name = {route.name} 
                             games = {<SportGames id = {route.sportid} />}
                             roster = {<Roster id = {route.sportid} />}
                             stats = {route.stats}
                             gender = {route.gender}
                             />);
          }
        }}
    />);
  }
};