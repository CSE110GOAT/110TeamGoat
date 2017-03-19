'use strict';

import React, { Component, PropTypes } from 'react';
import { AppRegistry, Text, ScrollView, View, StyleSheet, Image, WebView, Linking, TouchableOpacity, TouchableHighlight, TabBarIOS } from 'react-native';
import Header from '../Header.js';
import Article from './Article.js';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


export default class News_Page extends Component {
    constructor(){
        super()
        this.state = {
            articles: [],
        }

        {this.getArticledata()}
    }


    getArticledata() {
        fetch('https://goatbackend110.appspot.com/static/news.json')
        .then((response) => response.json())
        .then((responseJson) => {
            responseJson = responseJson.articles;
            for(var i = 0; i < 25; i++){
              var oneArticle = responseJson[String(i)];
              this.setState({
                articles : this.state.articles.concat( 
                <View key={i}>
                    <Article
                    time= {oneArticle[2]}
                    source= {"UCSD Athletics"}
                    url= {'http://' + oneArticle[0]}
                    headline= {oneArticle[1]}
                    picture= {'https://goatbackend110.appspot.com/static/news/' + i + '.png'}
                    />
                </View>
                )});
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header/>

                <ScrollView>
                    {this.state.articles}
                </ScrollView>


                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'flex-end'
                }}>

                    <View style={styles.home_icon}>
                        <Image
                        source={require('./home_bar_icons/home.png')}
                        style={styles.home_pic}
                        />
                    </View>

                    <View style={styles.home_icon}>
                        <Image
                        source={require('./home_bar_icons/magnifying_glass.png')}
                        style={styles.home_pic}
                        />
                    </View>

                    <View style={styles.home_icon}>
                        <Image
                        source={require('./home_bar_icons/social.png')}
                        style={styles.home_pic}
                        />
                    </View>

                    <View style={styles.curr_icon}>
                        <Image
                        source={require('./home_bar_icons/news.png')}
                        style={styles.home_pic}
                        />
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
                                 head: {
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 width: window.width,
                                 height: 80,
                                 backgroundColor: '#00008b'
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

                                 sport_title: {
                                 fontSize: 18,
                                 textAlign: 'center',
                                 },

                                 sport_pic: {
                                 width: window.width/3 - 50,
                                 height: window.width/3 - 50,
                                 alignSelf: 'center',
                                 },

                                 home_icon: {
                                 width: window.width/4,
                                 height: window.width/4 - 45,
                                 backgroundColor: 'white',
                                 borderColor: 'gainsboro',
                                 borderTopWidth: 0.5,
                                 borderRightWidth: 1,
                                 borderLeftWidth: 1,
                                 borderBottomWidth: 0,
                                 justifyContent: 'center'
                                 },

                                 curr_icon: {
                                 width: window.width/4,
                                 height: window.width/4 - 45,
                                 backgroundColor: 'white',
                                 borderColor: 'grey',
                                 borderTopWidth: 1,
                                 borderRightWidth: 1,
                                 borderLeftWidth: 2,
                                 borderBottomWidth: 1,
                                 justifyContent: 'center'
                                 },

                                 home_pic: {
                                 width: window.width/4 - 60,
                                 height: window.width/4 - 60,
                                 alignSelf: 'center'
                                 },

                                 });

AppRegistry.registerComponent('FirstProject', () => News_Page);