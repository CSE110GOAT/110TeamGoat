'use strict';

import React, { Component } from 'react'
import ReactNative from 'react-native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOS,
  Navigator
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

import GameNavigator from './GameNavigator'
import MyScene from './MyScene'
import HomeNav from './HomeNav'
import Explore from './ExplorePage/index.ios.js'
import Social from './Social'
import News from './NewsPage_2/index.ios.js'

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


export default class NavBar extends Component{

    state = {
      selectedTab: 'home'
    };

   render() {
    return (
      <TabBarIOS
        barTintColor = "white"
        tintColor= "navy"
        unselectedItemTintColor = "navy"
         >
          <Icon.TabBarItemIOS
            iconName="home-outline"
            selectedIconName = "home"
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          {<HomeNav/>}
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName="magnify"
            selectedIconName = "magnify"
            selected={this.state.selectedTab === 'explore'}
            onPress={() => {
            this.setState({
              selectedTab: 'explore',
            });
          }}>
          {<Explore/>}
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName="facebook"
            selectedIconName = "facebook"
            selected={this.state.selectedTab === 'social'}
            onPress={() => {
            this.setState({
              selectedTab: 'social',
            });
          }}>
          {<Social/>}
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName="newspaper"
            selectedIconName = "newspaper"
            selected={this.state.selectedTab === 'news'}
            onPress={() => {
            this.setState({
              selectedTab: 'news',
            });
          }}>
          {<News/>}
          </Icon.TabBarItemIOS>
        </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  bar:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: window.width/3
  },
  home_icon:{
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderTopWidth: 0.5,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  home_pic:{
    width: 20,
    height: 20
    }
});

AppRegistry.registerComponent('NavBar', () => NavBar);
