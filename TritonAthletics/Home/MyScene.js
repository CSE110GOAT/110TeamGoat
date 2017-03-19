import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator,
  TabBarIOS,
  TouchableOpacity
} from 'react-native';

import Header from '../Header'
import GamePreview from './GamePreview'
import GameNavigator from './GameNavigator'
import FutureGame from './FutureGame'
import Game from './Game'
import FutureGamePreview from './FutureGamePreview'

export default class MyScene extends Component {
  constructor(){
    super()
    this.key = -1
    this.state = {
      game : [],
      futureGame: [],
      tournamentGame : [],

    }

   {this.getGamedata()}
  }

  navIndiv() {
    this.props.navigator.push({
      id: 'second',

    })
  }



navTournament(){
  this.props.navigator.push({
      id:'fourth',

  })
}

 getGamedata() {
   fetch('https://goatbackend110.appspot.com/static/schedule.json')
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson = responseJson.Games;
     //  var size =  Object.keys(responseJson).length
       for(var i = 50; i < 100 ; i++){
         var oneGame = responseJson[String(i)];
           var gender = oneGame[12]
           var cont = st.container1
            if( gender == -1 ) {
              cont = st.container1
            }
            else if ( gender == 1) {
              cont = st.container2
            }
            else {
              cont = st.container3
            }
/*
            // WHAT IS THE CHECK FOR THIS??????
            if(oneGame[11]== 1 ){

               this.setState({
               tournamentGame: this.state.tournamentGame.concat([
                   <View key ={i}>
                      <TournamentPreview
                      date= {oneGame[0]}
                      sport = {oneGame[1]}
                      team2 = {oneGame[2]}
                      loc = {oneGame[3]}
                      time = {oneGame[4]}
                      score = {oneGame[5]}
                      recap = {oneGame[6]}
                      notes = {oneGame[7]}
                      stats = {oneGame[8]}
                      latitude = {oneGame[9]}
                      longitude = {oneGame[10]}
                      gender = {cont}
                      navigator = {this.props.navigator}
                       />
                 </View>
               ])
             })

             continue;
            }
*/
          // CHECK IF FUTURE GAME
          if(oneGame[5] == ""){
            this.setState({
            futureGame: this.state.futureGame.concat([
             <View key = {i}>

               <FutureGamePreview
                date= {oneGame[0]}
                sport = {oneGame[1]}
                team2 = {oneGame[2]}
                loc = {oneGame[3]}
                time = {oneGame[4]}
                score = {oneGame[5]}
                recap = {oneGame[6]}
                notes = {oneGame[7]}
                stats = {oneGame[8]}
                latitude = {oneGame[9]}
                longitude = {oneGame[10]}
                gender = {cont}
                navigator = {this.props.navigator}
                />
              </View>
            ])
          })
            continue;
          }

          // CHECK IF PAST/CURRENT GAME

          this.setState({
            game: this.state.game.concat([
             <View key = {i}>
               <GamePreview
                date= {oneGame[0]}
                sport = {oneGame[1]}
                team2 = {oneGame[2]}
                loc = {oneGame[3]}
                time = {oneGame[4]}
                score = {oneGame[5]}
                recap = {oneGame[6]}
                notes = {oneGame[7]}
                stats = {oneGame[8]}
                latitude = {oneGame[9]}
                longitude = {oneGame[10]}
                gender = {cont}
                navigator = {this.props.navigator}
                />
              </View>
            ])
          })

         }
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
        <View style={styles.container}>
           <Header/>
           <ScrollView style = {{flex:1}} >
             <View style = {styles.time}>
               <Text style={styles.title}>
                 --Recent--
               </Text>
             </View>

            {this.state.game}

             <View style = {styles.time}>
               <Text style={styles.title}>
                 --Upcoming--
               </Text>
             </View>

                {this.state.futureGame}

           </ScrollView>

         </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'

  },
  time: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 30,
    backgroundColor: 'navy',
    borderColor:'black',
    borderWidth:1
  },
  title: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: "HelveticaNeue-CondensedBold",

  }
});

const st = StyleSheet.create({
  container1: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    borderLeftColor: 'blue',
    borderLeftWidth: 10,
  },
  container2: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    borderLeftColor: 'gold',
    borderLeftWidth: 10,
  },
  container3: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    borderLeftColor: 'grey',
    borderLeftWidth: 10,
  }})
AppRegistry.registerComponent('MyScene', () => MyScene);
