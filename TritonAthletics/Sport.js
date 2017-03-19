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
 state = {
    index: 0,
    sport: this.props.stats,
    routes: [
      { key: '1', title: 'GAMES' },
      { key: '2', title: 'ROSTER' },
      { key: '3', title: 'STATS' },
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

  findSport() {
    switch(this.state.id) {
      case 0:
        return "http://www.ucsdtritons.com/fls/5800/stats/baseball/2017/teamstat.htm?DB_OEM_ID=5800" ;
      case 1:
        return "http://www.ucsdtritons.com/fls/5800/stats/mbasketball/2016-17/teamstat.htm?DB_OEM_ID=5800";
      case 4:
        return "http://www.ucsdtritons.com/fls/5800/stats/mgolf/2016-17/teamstat.htm?DB_OEM_ID=5800";
      case 6:
        return "http://www.ucsdtritons.com/fls/5800/stats/msoccer/2016/teamstat.htm?DB_OEM_ID=5800";
      case 8:
        return "http://www.ucsdtritons.com/fls/5800/stats/mtennis/2017/teamstat.htm?&DB_OEM_ID=5800";
      case 10:
        return "http://www.ucsdtritons.com/fls/5800/stats/mvolleyball/2017/teamstat.htm?DB_OEM_ID=5800";
      case 11:
        return "http://www.ucsdtritons.com/ViewArticle.dbml?DB_OEM_ID=5800&ATCLID=205687919&DB_OEM_ID=5800";

      case 12:
        return "http://www.ucsdtritons.com/fls/5800/stats/wbasketball/2016-17/teamstat.htm?DB_OEM_ID=5800";
      case 16:
        return "http://www.ucsdtritons.com/fls/5800/stats/wsoccer/2016/teamstat.htm?DB_OEM_ID=5800";
      case 17: 
        return "http://www.ucsdtritons.com/fls/5800/stats/softball/2017/teamstat.htm?DB_OEM_ID=5800";
      case 19:
        return "http://www.ucsdtritons.com/fls/5800/stats/wtennis/2017/teamstat.htm?DB_OEM_ID=5800";
      case 21:
        return "http://www.ucsdtritons.com/fls/5800/stats/wvolleyball/2016/teamstat.htm?DB_OEM_ID=5800";
      case 22:
        return "http://www.ucsdtritons.com/ViewArticle.dbml?&DB_OEM_ID=5800&ATCLID=211423801";
    }
  }

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
     /*
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
      )
      */
      default:

      return null;
    };
  }

 navBack () {
    this.props.navigator.pop({
      id: this.props.gender
    })
  } 

  render() {
    return(
      <View style = {{flex:1}}>

       <View style = {styles.topBar}>
          <TabBarIOS
            barTintColor = "white"
            tintColor = "black"
            unselectedItemTintColor = "black"
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

       <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
 
      />

      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: 'black',
    fontSize: 34,

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