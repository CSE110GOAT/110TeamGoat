
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
          <View style={styles.articles}>
            <View style={styles.logo_item}>
              <Image source={{uri: props.picture}} style={styles.logo}/>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
  container:{

  },
  articles: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo_item:{
    alignItems: 'center',
    height: 200,
  },
  sport:{
    fontFamily: 'HelveticaNeue-CondensedBold',
    textAlign:'center',
    fontSize:18,
    backgroundColor:'navy',
    color:'white',
    borderColor: 'white',
    borderWidth: 1.5,
    padding:6
  },
  sport_image: {
    width: 25,
    height: 50,
    alignItems: 'center',
    marginTop: 15,
  },
  logo: {
    width: window.width,
    height: window.height/3 - 15,
    resizeMode: 'contain',
    borderColor: 'grey',
    borderWidth: 0,
    justifyContent: 'flex-start',
  }
});

export default Article
