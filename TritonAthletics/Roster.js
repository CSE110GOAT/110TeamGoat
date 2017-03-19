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
import RosterIcon from "./RosterIcon";

export default class Roster extends Component {

  constructor(props) {
     super()
     this.state = {
       games: [],
       size:0,
       imgUrl: ""
     }

     { this.getGame() }
   }

   getPlayer(roster, i, position) {
     return  (
        <TouchableHighlight>
          <View style={position} key={i.toString()}>
            <RosterIcon
              pic={this.state.imgUrl + i + ".png"}
              name={roster[i][0]}
              bio={"http://" + roster[i][6]}
            />
          </View>
        </TouchableHighlight>
      );
   }
   getGame() {
     fetch('https://goatbackend110.appspot.com/static/rosters.json')
       .then((response) => response.json())
       .then((responseJson) => {

         var roster = responseJson.rosters[this.props.id]
         var size = Object.keys(roster).length
         var game = []
         this.setState({
           imgUrl: "https://goatbackend110.appspot.com/static/rosters/" + this.props.id + "/"
         })

         for (var i = 0; i < (size - (size % 3)); i += 3) {
           game.push(
             <View style={styles.roster_row} key={i}>
               {this.getPlayer(roster, i, styles.iconLeft)}
               {this.getPlayer(roster, i + 1, styles.icon)}
               {this.getPlayer(roster, i + 2, styles.iconRight)}
             </View>
           );
         }
         if (size % 3 != 0) {
           if (size % 3 == 1) {
             game.push(
               <View style={styles.roster_row} key={i}>
                 {this.getPlayer(roster, size - 1, styles.iconLeft)}
               </View>
             );
           }

           else {
             game.push(
               <View style={styles.roster_row} key={i}>
                 {this.getPlayer(roster, size - 2, styles.iconLeft)}
                 {this.getPlayer(roster, size - 1, styles.icon)}
               </View>
             );
           }
         }

         this.setState({
           games: game,
           size: size
         })

       }).catch((error) => {
         console.error(error);
       });
   }

  render () {
    return (
        <View style={styles.roster}>
          <ScrollView>
            { this.state.games }
          </ScrollView>
        </View>

      );
    }
}

const styles = StyleSheet.create({
  roster: {
    paddingBottom: 50
  },
  overall_page: {
    flex: 1,
    marginTop: 10,
    paddingBottom: 50
  },
  
  container: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    width: window.width,
    height: 60,
    justifyContent: 'center'
  },

  item: {
    flexDirection: 'row',
    fontFamily:"HelveticaNeue-Thin",
    textAlign:'center',
    fontSize: 16,
  },

  time: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  roster_row: {
    flexDirection: 'row',
  },

  icon: {
    paddingBottom: 3,
  },

  iconLeft: {
    paddingRight: 3
  },

  iconRight: {
    paddingLeft: 3
  }

});