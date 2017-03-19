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

export default class SportGames extends Component {

  constructor(props) {
     super()
     this.state = {
       id: props.id,
       games: []
     }

     { this.getGame() }
   }

   getGame() {
      fetch('https://goatbackend110.appspot.com/static/schedule_individual.json')
         .then((response) => response.json())
         .then((responseJson) => {

           var sports = responseJson.Games[this.state.id]
           var size = Object.keys(sports).length
           var game = []

           for (var i = 0; i < size; i++) {
             game.push(
               <View style={styles.container} key={i}>
                 <Text style={styles.item}> UCSD {sports[i][4]} {sports[i][1]}</Text>
                 <Text style={styles.time}> {sports[i][0]} {sports[i][3]}</Text>
               </View>
             )
           }

           this.setState({
             games: game
           })

         }).catch((error) => {
           console.error(error);
         });
   }

  render () {
    return (
        <View style={styles.games}>
          <ScrollView>
            { this.state.games }
          </ScrollView>
        </View>

      );
    }
}

const styles = StyleSheet.create({
  games: {
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
    fontFamily:"HelveticaNeue-CondensedBold",

  }

});
