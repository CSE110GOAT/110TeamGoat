import React, { Component } from 'react';
import { View, StyleSheet, Text, AppRegistry, WebView, TouchableOpacity } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Map from './Map'

import Stats from './ExplorePage/Stats';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class StatusWithoutStats extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    index: 0,
    sport: this.props.stats,
    routes: [
      { key: '1', title: 'NOTES' },
      { key: '2', title: 'MAPS' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props}
      style = {styles.tabbar}
      indicatorStyle = {styles.indicator}
      tabStyle = {styles.tab}
    />;
  };



  _renderScene = ({ route }) => {

  switch (route.key) {
    case '2':
      return <Map
      loc = {this.props.loc}
      latitude = {this.props.latitude}
      longitude = {this.props.longitude}
      />

    case '1':
      return <View style={styles.page}>
          <Stats url = {this.props.notes} />

        </View>

    default:
      return null;
    };
  }


  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  indicator: {
    backgroundColor: 'gold'
  },

  tab: {
    opacity: 1,
  },

  webpage: {
    marginTop: 20,
    height: window.height,
    width: window.width,
    flex: 1
  },

  tabbar: {
    backgroundColor: 'navy'
  }
});

AppRegistry.registerComponent('StatusWithoutStats', () => StatusWithoutStats);
