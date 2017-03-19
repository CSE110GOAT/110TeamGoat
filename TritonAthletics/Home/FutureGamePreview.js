
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Navigator,
  TouchableOpacity
} from 'react-native'





const FutureGamePreview = (props) => {
    return(

      <TouchableOpacity activeOpacity={0.5} onPress= {() => {
      props.navigator.push({
        id: 'third',
        sport: props.sport,
        loc: props.loc,
        team2: props.team2,
         date: props.date,
         time: props.time,
        score: props.score,
        recap: props.recap,
       notes: props.notes,
       stats: props.stats,
       latitude: props.latitude,
       longitude: props.longitude,
       gender: props.gender
        })
      }}>
        <View style={props.gender}>
          <View>
            <Text style={styles.item}>UCSD vs. {props.team2}  </Text>
            <Text style={styles.time}>{props.date} {props.time} </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    borderLeftColor: 'blue',
    borderLeftWidth: 10
  },
  container2: {

    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderTopWidth:0,
    borderBottomWidth:0.5,
    borderLeftColor: 'gold',
    borderLeftWidth: 10
  },
   container3: {

      backgroundColor: 'white',
      justifyContent: 'center',
      flexDirection: 'row',
      borderColor: 'grey',
      borderTopWidth:0,
      borderBottomWidth:0.5,
      borderLeftColor: 'green',
      borderLeftWidth: 10
    },
  logo_item:{
    alignItems: 'center'
  },
  item:{
    fontFamily:"HelveticaNeue-Thin",
    padding: 12,
    fontSize:16,
    borderColor:'grey',
    borderTopWidth:0,
    borderBottomWidth:0,
    borderLeftWidth:0.5,
    borderRightWidth:0.5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center'
  },
  sport:{
    fontFamily: "HelveticaNeue-CondensedBold",
    backgroundColor: 'gold',
    fontWeight: 'bold',
    borderColor: 'navy'
  },
  sport_image: {
    width: 25,
    height: 50,
    alignItems: 'center',
    marginTop: 15
  },
  time: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily:"HelveticaNeue-CondensedBold"
  },
  logo: {
    width: 35,
    height: 35,
    marginTop: 10,
    marginRight:15,
    marginLeft: 15,
    justifyContent: 'center'
  }
});

export default FutureGamePreview
