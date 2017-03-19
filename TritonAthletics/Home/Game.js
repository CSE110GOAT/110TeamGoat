import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import GamePreview from './GamePreview'
import MyScene from './MyScene'
import Status from './Status'
import Header from '../Header'


const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Game extends Component{
    constructor(){
      super()

    }
    render(){
    return (
      <View>
        <Text style={styles.sport}> {this.props.sport} </Text>
        <View style={styles.container}>
          <View>
            <Text style={styles.item}>UCSD {this.props.score} {this.props.team2}</Text>
            <Text style = {styles.time}> {this.props.date} {this.props.time} </Text>
          </View>
        </View>
      </View>
    )}
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth:0.5,
    width:window.width
  },
  logo_item:{
    alignItems: 'center'
  },
  item:{
    fontFamily: 'HelveticaNeue-Thin',
    padding: 10,
    borderColor: 'grey',
    justifyContent: 'center',
    height: 62,
   textAlign:'center',
   fontSize: 22
  },
  sport:{
    fontFamily: 'HelveticaNeue-CondensedBold',
    backgroundColor: 'gold',
    borderColor: 'navy',
    padding: 10,
    fontSize: 28,
    textAlign: 'center'
  },
  sport_image: {
    width: 25,
    height: 50,
    alignItems: 'center',
    marginTop: 15
  },
  time: {
    fontSize: 18,
    fontFamily: 'HelveticaNeue-CondensedBlack',
    textAlign: 'center',

  }
});

AppRegistry.registerComponent('Game', () => Game);
