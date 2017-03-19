import React, { Component } from 'react';
import { MapView, AppRegistry, View, Text } from 'react-native';

export default class Maps extends Component {



  state = {
    region: {
      latitude: parseFloat(this.props.latitude),
      longitude: parseFloat(this.props.longitude),
      latitudeDelta: 1,
      longitudeDelta: 1
    },
    annotations: [{latitude: parseFloat(this.props.latitude), longitude: parseFloat(this.props.longitude), animateDrop: true}]
  };

  render() {

    console.error = (error) => error.apply;
    console.disableYellowBox = true;

    return (
      
      <View style={{flex:1}}>
      <Text style={{textAlign: 'center'}}>{this.props.loc}</Text>
      <MapView
        style={{flex:1}}
        region={this.state.region}
        annotations={this.state.annotations}
      />
      </View>
    );
  }
}

AppRegistry.registerComponent('Maps', () => Maps);
