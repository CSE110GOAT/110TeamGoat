
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  WebView,
  Linking,
  TouchableOpacity
} from 'react-native'


const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

const Article = (props) => {


    return (
      <TouchableOpacity
        onPress={() => {
            Linking.canOpenURL(props.url).then(supported => {
                if (supported) {
                    Linking.openURL(props.url);
                } else {
                    console.log('Don\'t know how to open URL: ' + props.url);
                }
            })
        }}
      >
        <View>
          <Text style={styles.sport}> {props.time} -- {props.headline}</Text>

          <View style={styles.container}>
            <View style={styles.logo_item}>
              <Image source={{uri: props.picture}} style={styles.logo}/>

            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 0
  },
  logo_item:{
    alignItems: 'center',
    height: 200
  },
  item:{
    fontFamily:"Menlo",
    borderWidth: 0.0,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    textAlign:'center'
  },
  sport:{
    fontFamily: 'HelveticaNeue-Thin',
    //backgroundColor: 'gold',
    fontWeight: 'bold',
    borderColor: 'grey',
    borderWidth: 0.0,
    textAlign:'center'
  },
  sport_image: {
    width: 25,
    height: 50,
    alignItems: 'center',
    marginTop: 15
  },
  source: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  summary: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign:'center'
  },
  logo: {
    width: window.width,
    height: window.height/3 - 15,
    resizeMode: 'contain',
    borderColor: 'grey',
    borderWidth: 0,
    justifyContent: 'flex-start'
  }
});

export default Article