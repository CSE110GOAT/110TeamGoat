import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import Game from './GamePreview'
import NavFuture from './NavFuture'
import FutureGamePreview from './FutureGamePreview'
import Status from './Status'
import StatusWithoutStats from './StatusWithoutStats'
import StatusWithoutBoth from './StatusWithoutBoth'

export default class FutureGame extends Component {
  constructor(){
    super()

  }


  render(){
    return(
      <View>
        <View >
        <Text style ={styles.sport}> {this.props.sport}</Text>
        </View>
        <View style = {styles.container}>
          <Text style = {styles.item}>UCSD{"\t"}vs.{"\t"}{this.props.team2}</Text>
          <Text style = {styles.time}>{this.props.date} {this.props.time}</Text>
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',

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
   fontSize: 18

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

AppRegistry.registerComponent('FutureGame', () => FutureGame);
