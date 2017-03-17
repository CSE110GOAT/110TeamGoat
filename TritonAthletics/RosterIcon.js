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
  Linking,
  JSON
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class RosterIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitFont: true,
    };
  }

  handleClick = () => {
    Linking.canOpenURL(this.props.bio)
    .then(supported => {
      if (supported) {
        Linking.openURL(this.props.bio);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.bio);
      }
    })
    .catch(error => {
      console.error('rip');
    });
  };

  render() {
    return(
        <View style={styles.grid}>
          <TouchableHighlight onPress = {this.handleClick}>
            <Image
              source = {{uri: this.props.pic}}
              style = {styles.picture}
            >
              <Text
                style = {styles.playerName}
                adjustsFontSizeToFit = {true}>{this.props.name}</Text>
            </Image>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    width: window.width/3,
    height: window.height/3 - 60,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopWidth: 0,
    borderLeftWidth: 0.5,
  },

  playerName: {
    fontSize: 25,
    textAlign: 'left',
    backgroundColor: 'navy',
    color: 'white',
    padding: 4
  },

  picture: {
    width: window.width/3,
    height: window.height/3 - 60,
    justifyContent: 'flex-end'
  }

});