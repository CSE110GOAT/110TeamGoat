const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Navigator,
  TabBarIOS,
  Linking,
  WebView
} from 'react-native';
import Roster from './Roster';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import SportGames from './SportGames';
import Stats from './Stats';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Sport extends Component {
  constructor(props) {
    super(props)
    var nostats = ['2', '3', '5', '7', '9', '13', '14', '15', '18', '20'];
    var twotab = false;
    if ( props.string == "2" || props.string == "3" || props.string == "5" ||
    props.string == "7" || props.string == "9" || props.string == "13" ||
    props.string == "14" || props.string == "15" || props.string == "18" |
    props.string == "20" ) {
        twotab = true;
    }
    if (twotab) {
      this.state = {
        index: 0,
        routes: [
          { key: '1', title: 'GAMES' },
          { key: '2', title: 'ROSTER' },
        ]
      }
    }
    else {
      this.state = {
        index: 0,
        routes: [
        { key: '1', title: 'GAMES' },
        { key: '2', title: 'ROSTER' },
        { key: '3', title: 'STATS' },
        ]
      }
    }
  }

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

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }
  getWebView() {
    return (
      <WebView
          ref={WEBVIEW_REF}
          onNavigationStateChange=
            {this.onNavigationStateChange.bind(this)}
          source={{uri: this.props.stats }}
          />
    )
  }
  onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }
  _renderScene = ({ route }) => {

  switch (route.key) {
    case '1':
      return <View style={styles.page}>
        {this.props.games}
        </View>

    case '2':
      return <View style={styles.page}>
        {this.props.roster}
        </View>

    case '3':
     return (
       <Stats url = {this.props.stats} />
     )
      default:
        return null;
    };
  }

 navBack () {
    this.props.navigator.pop({
      id: this.props.gender
    })
  }
getSlider() {
  return (
<TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
       />
  )
}
  render() {
    return(
      <View style = {{flex:1}}>

       <View style = {styles.topBar}>
          <TabBarIOS
            barTintColor = "white"
            tintColor = "navy"
            unselectedItemTintColor = "navy"
            translucent = {true}
          >
            <Icon.TabBarItemIOS
              iconName = "ios-arrow-back-outline"
              selectedIconName = "ios-arrow-back"
              onPress = {this.navBack.bind(this)}
            />
          </TabBarIOS>

          <View style = {styles.head}>
            <Text style = {styles.title}> {this.props.name} </Text>
          </View>
      </View>

      {this.getSlider()}

      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar:{
    backgroundColor: 'navy'
  },
  head: {
    width: 320,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    marginBottom: 8,
    paddingRight: 45,

  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'navy',
    fontSize: 34,
    fontFamily:'HelveticaNeue-CondensedBold'

  },
  topBar: {
    flexDirection: 'row',
    width: window.width,
    backgroundColor: 'white',
    marginTop: 20,
    borderTopColor:'black',
    borderTopWidth:0.5
  }
});
