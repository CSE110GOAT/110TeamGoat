'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Navigator,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

import Roster from './Roster';
import Header from '../Header';
import SportIcon from './SportIcon';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MenSports extends Component {

  sportIcon( sport, pic ) {
      var fitFont = false;
      if (sport == 'Swimming & Diving') {
          fitFont = true;
      }
      return (
          <View style={styles.sport_icons}>
              <Image
                  source={pic}
                  style={styles.sport_pic}
              />
              <Text style={styles.sport_title}
                  adjustsFontSizeToFit={fitFont}>{sport}</Text>
          </View>
      );
  }

  findStats( id ) {
    switch( id ) {
        case 0:
            return "http://www.ucsdtritons.com/fls/5800/stats/baseball/2017/teamstat.htm?DB_OEM_ID=5800";
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
            return "http://www.ucsdtritons.com/ViewArticle.dbml?&DB_OEM_ID=5800&ATCLID=211165004";

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
        default:
            return "https://google.com"

    }
  }
  sportButton(idNum, idString, name, gender, pic) {
      return (
          <TouchableHighlight onPress = {() => {
                                this.props.navigator.push({
                                    id: {idNum},
                                    idNum: {idNum},
                                    sportid: idString,
                                    name: <Text>{name}</Text>,
                                    gender: <Text>{gender}</Text>,
                                    stats: this.findStats(idNum)
                                })
                              }}>
            <View>
                {this.sportIcon(name,pic)}
            </View>
          </TouchableHighlight>
      )
  }

  genderTitle() {
      if( this.props.id == 0 ){
          return (
          <View style = {styles.banner}>
            <Text style = {styles.title}> MEN'S SPORTS </Text>
          </View>
          )
      }
      else {
          return(
          <View style = {styles.banner}>
            <Text style = {styles.title}> WOMEN'S SPORTS </Text>
          </View>
          )
      }
  }

  getSports() {
    if( this.props.id == 0 ) {
        var currId = 0;
        return (
        <View>
            <View style={{flexDirection: 'row'}}>
                {this.sportButton(0,"0","Baseball","men",require("./sport_icons/baseball.png"))}
                {this.sportButton(1,"1","Basketball","men",require("./sport_icons/basketball.png"))}
                {this.sportButton(2,"2","Cross Country","men",require("./sport_icons/cross_country.png"))}
            </View>
            <View style={{flexDirection: 'row'}}>
                {this.sportButton(3,"3","Fencing","men",require("./sport_icons/fencing.png"))}
                {this.sportButton(4,"4","Golf","men",require("./sport_icons/golf.png"))}
                {this.sportButton(5,"5","Rowing","men",require("./sport_icons/rowing.png"))}
            </View>
            <View style={{flexDirection: 'row'}}>
                {this.sportButton(6,"6","Soccer","men",require("./sport_icons/soccer.png"))}
                {this.sportButton(7,"7","Swiming & Diving","men",require("./sport_icons/swimming.png"))}
                {this.sportButton(8,"8","Tennis","men",require("./sport_icons/tennis.png"))}
            </View>
            <View style={{flexDirection: 'row'}}>
                {this.sportButton(9,"9","Track & Field","men",require("./sport_icons/track.png"))}
                {this.sportButton(10,"10","Volleyball","men",require("./sport_icons/volleyball.png"))}
                {this.sportButton(11,"11","Water Polo","men",require("./sport_icons/water_polo.png"))}
            </View>
        </View>
        )
    }
    else {
        return (
            <View>
                <View style={{flexDirection: 'row'}}>
                    {this.sportButton(12,"12","Basketball","women",require("./sport_icons/basketball.png"))}
                    {this.sportButton(13,"13","Cross Country","women",require("./sport_icons/cross_country.png"))}
                    {this.sportButton(14,"14","Fencing","women",require("./sport_icons/fencing.png"))}
                </View>
                <View style={{flexDirection: 'row'}}>
                    {this.sportButton(15,"15","Rowing","women",require("./sport_icons/rowing.png"))}
                    {this.sportButton(16,"16","Soccer","women",require("./sport_icons/soccer.png"))}
                    {this.sportButton(17,"17","Softball","women",require("./sport_icons/softball.png"))}
                </View>
                <View style={{flexDirection: 'row'}}>
                    {this.sportButton(18,"18","Swiming & Diving","women",require("./sport_icons/swimming.png"))}
                    {this.sportButton(19,"19","Tennis","women",require("./sport_icons/tennis.png"))}
                    {this.sportButton(20,"20","Track & Field","women",require("./sport_icons/track.png"))}
                </View>
                <View style={{flexDirection: 'row'}}>
                    {this.sportButton(21,"21","Volleyball","women",require("./sport_icons/volleyball.png"))}
                    {this.sportButton(22,"22","Water Polo","women",require("./sport_icons/water_polo.png"))}
                </View>
            </View>
        )
    }
  }

  navBack () {
    this.props.navigator.pop({
      id: 'explore'
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>

        <View>
          <Header />
        </View>

        <View style = {styles.topBar}>
            <TouchableHighlight onPress = {this.navBack.bind(this)} underlayColor = 'white'>
                <Image
                    source = {require('./Back.png')}
                    style = {styles.pic}
                />
            </TouchableHighlight>
            {this.genderTitle()}
        </View>
            {this.getSports()}
        </View>
    );
  }
};

const styles = StyleSheet.create({

  banner: {
    width: 320,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 8,
    marginBottom: 8,
    paddingRight: 60

  },

  sport_icon: {
    width: window.width/3,
    height: window.width/3,
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

  topBar: {
    flexDirection: 'row',
    width: window.width,
    borderWidth: 0.5,
    borderColor: 'gainsboro',
    backgroundColor: 'white'
  },

  title: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    marginLeft: 37,
    fontFamily:"HelveticaNeue-CondensedBold"
  },

  pic: {

    width: 25,
    height: 25,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 0
  },
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
