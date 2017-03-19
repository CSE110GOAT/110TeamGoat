import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'

export default class Header extends Component{
    constructor(){
    super()
    this.state = {
      banner: 'Triton Athletics'
      }
    }
    render(){
    return (
      <View style={styles.container}>
        <Image source={require('./header.png')} style={styles.header_image}/>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  container:{
    borderBottomColor:'black',
    borderBottomWidth:0
  },
  title: {
    justifyContent: 'center',
    color: 'yellow',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: "Didot"
  },
  header_image: {
    width: window.width,
    height: 93
  }
});

AppRegistry.registerComponent('Header', () => Header);
