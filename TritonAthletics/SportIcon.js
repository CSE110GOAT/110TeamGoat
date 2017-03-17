import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class SportIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitFont: false
    };
  }

  render() {
    if (this.props.sport == 'Swimming & Diving') {
      this.state.fitFont = true;
    }
    return(
        <View style={styles.sport_icons}>
          <Image
            source={this.props.pic}
            style={styles.sport_pic}
          />
          <Text style={styles.sport_title}
          adjustsFontSizeToFit={this.state.fitFont}>{this.props.sport}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  sport_icons: {
    width: window.width/3,
    height: window.width/3 - 4,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderTopWidth: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sport_title: {
    fontSize: 18,
    textAlign: 'center',
  },

  sport_pic: {
    width: window.width/3 - 50,
    height: window.width/3 - 50,
    alignSelf: 'center',
  },
});

AppRegistry.registerComponent('SportIcon', () => SportIcon);
