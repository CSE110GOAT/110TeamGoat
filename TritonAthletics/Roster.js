import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  TouchableHighlight,
  Navigator,
  TabBarIOS
} from 'react-native';

import RosterIcon from './RosterIcon.js';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class MSoccerRoster extends Component {

  constructor() {
    super()
    this.state = {
      size: 0,
      names: [],
      fullBios: [],
    }

    { this.getRoster() }
  }

  getRoster() {
     fetch('https://goatbackend110.appspot.com/static/rosters.json')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            size: Object.keys(responseJson.rosters["6"]).length
          })

          for (var i = 0; i < this.state.size; i++) {
            this.setState({
              names: this.state.names.concat([
                responseJson.rosters["6"][i][0]
              ]),
              fullBios: this.state.fullBios.concat([
                responseJson.rosters["6"][i][6]
              ])
            });
          }
        })
        .catch((ignore) => {
          console.error(error);
        });
  }


  render() {
    var roster = []

    for (let i = 0; i < (this.state.size - (this.state.size % 3)); i += 3) {
      var url1 = "https://goatbackend110.appspot.com/static/rosters/6/" + i + ".png"
      var url2 = "https://goatbackend110.appspot.com/static/rosters/6/" + (i+1) + ".png"
      var url3 = "https://goatbackend110.appspot.com/static/rosters/6/" + (i+2) + ".png"

      roster.push(
        <View style = {styles.roster_row} key = {i}>
          <TouchableHighlight>
            <View style = {styles.iconLeft} key = {i.toString()}>
              <RosterIcon
                pic = {url1}
                name = {this.state.names[i]}
                bio = {"http://" + this.state.fullBios[i]}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style = {styles.icon} key = {(i+1).toString()}>
              <RosterIcon
                pic = {url2}
                name = {this.state.names[i+1]}
                bio = {"http://" + this.state.fullBios[i+1]}
              />
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View style = {styles.iconRight} key = {(i+2).toString()}>
              <RosterIcon
                pic = {url3}
                name = {this.state.names[i+2]}
                bio = {"http://" + this.state.fullBios[i+2]}
              />
            </View>
          </TouchableHighlight>
        </View>
      );

    }

    if (this.state.size % 3 != 0) {
      if (this.state.size % 3 == 1) {
        var i = (this.state.size - 1)
        var url1 = "https://goatbackend110.appspot.com/static/rosters/6/" + i + ".png"
        roster.push(
          <View style = {styles.roster_row} key = {i}>
            <TouchableHighlight>
              <View style = {styles.iconLeft} key = {i.toString()}>
                <RosterIcon
                  pic = {url1}
                  name = {this.state.names[i]}
                  bio = {"http://" + this.state.fullBios[i]}
                />
              </View>
            </TouchableHighlight>
          </View>
        );
      }

      else {
        var i = (this.state.size - 2)
        var url1 = "https://goatbackend110.appspot.com/static/rosters/6/" + i + ".png"
        var url2 = "https://goatbackend110.appspot.com/static/rosters/6/" + (i+1) + ".png"

        roster.push(
          <View style = {styles.roster_row} key = {i}>
            <TouchableHighlight>
              <View style = {styles.iconLeft} key = {i.toString()}>
                <RosterIcon
                  pic = {url1}
                  name = {this.state.names[i]}
                  bio = {"http://" + this.state.fullBios[i]}
                />
              </View>
            </TouchableHighlight>

            <TouchableHighlight>
              <View style = {styles.icon} key = {(i+1).toString()}>
                <RosterIcon
                  pic = {url2}
                  name = {this.state.names[i+1]}
                  bio = {"http://" + this.state.fullBios[i+1]}
                />
              </View>
            </TouchableHighlight>

          </View>
        );
      }
    }

    return (
      <View style = {styles.overall_page}>
        <ScrollView>{ this.state.roster }</ScrollView>
      </View>

    );
  }
  };

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