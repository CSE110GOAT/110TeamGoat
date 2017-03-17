'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
    Navigator,
} from 'react-native';
import ExplorePage from './ExplorePage.js'
import GenderSports from './GenderSports.js'
import Sport from './Sport.js'
import SportGames from './SportGames';
import RosterIcon from './RosterIcon';

export default class Roster extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            size: 0,
            roster: [],
        }
        this.getRoster()
    }

    getRoster() {
        fetch('https://goatbackend110.appspot.com/static/rosters.json')
            .then((response) => response.json())
            .then((responseJson) => {
                var size = Object.keys(responseJson.rosters[this.state.id]).length;
                this.setState( {
                    size: size
                });
                var ros = [];
                for (var i = 0; i < this.state.size; i += 3) {
                    var url1 = "https://goatbackend110.appspot.com/static/rosters/1/" + i + ".png"
                    var url2 = "https://goatbackend110.appspot.com/static/rosters/1/" + (i + 1) + ".png"
                    var url3 = "https://goatbackend110.appspot.com/static/rosters/1/" + (i + 2) + ".png"

                    ros.push(
                        <View style={styles.roster_row} key={i}>
                            <TouchableHighlight>
                                <View style={styles.iconLeft} key={i.toString()}>
                                    <RosterIcon
                                        pic={url1}
                                        name={responseJson.rosters[this.state.id][i][0]}
                                        bio={"http://" + responseJson.rosters[this.state.id][i][6]}
                                    />
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight>
                                <View style={styles.icon} key={(i + 1).toString()}>
                                    <RosterIcon
                                        pic={url2}
                                        name={responseJson.rosters[this.state.id][i+1][0]}
                                        bio={"http://" + responseJson.rosters[this.state.id][i + 1][6]}
                                    />
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight>
                                <View style={styles.iconRight} key={(i + 2).toString()}>
                                    <RosterIcon
                                        pic={url3}
                                        name={responseJson.rosters[this.state.id][i + 2][0]}
                                        bio={"http://" + responseJson.rosters[this.state.id][i + 2][6]}
                                    />
                                </View>
                            </TouchableHighlight>
                        </View>
                    );
                }
                this.setState( {
                    roster: ros
                });
            })
            .catch((error) => {
           console.error(error);
         });
    }


    render() {
        return (
            <View style={styles.overall_page}>
                    {this.state.roster[0]}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    overall_page: {
        flex: 1,
        marginTop: 10,
        paddingBottom: 50
    },

    roster_row: {
        flexDirection: 'row',
    },

    icon: {
        paddingBottom: 3,
    },

    iconLeft: {
        paddingRight: 3
    },

    iconRight: {
        paddingLeft: 3
    }

});