const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView,
  Image
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: false };
  }


  getWebView() {
    return (
        <WebView
          ref={WEBVIEW_REF}
          style={{flex: 1}}
          scalesPageToFit={this.props.scale}
          onNavigationStateChange=
            {this.onNavigationStateChange.bind(this)}
          source={{uri: this.props.url }}
          />
    )
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        disabled={!this.state.canGoBack}
        onPress={this.onBack.bind(this)}
        >
        <View style={styles.topbar}>
            <Image style={this.state.canGoBack ? styles.back : styles.back}
            source = {require('./Back.png')}
            />
        </View>
          </TouchableOpacity>
          {this.getWebView()}

      </View>
    );
  }

  onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 45, /* Padding to push below the navigation bar */
    backgroundColor: 'white',
    justifyContent: 'center'

  },
  topbar: {
    height: 30,
    width: window.width,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    marginTop: 5,

  },
  back: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginRight: 0
  }
});

AppRegistry.registerComponent('Stats', () => Stats);
