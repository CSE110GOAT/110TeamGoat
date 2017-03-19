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

            </View>
        )
    }
}


AppRegistry.registerComponent('FirstProject', () => News_Page);
