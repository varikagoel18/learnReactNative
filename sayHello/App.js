/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,AppRegistry, Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text >Hello {this.props.name}</Text>
      </View>
    );
  }
}

export default class SayHello extends Component{
  render(){
    return (
      <View style={{alignContent: 'center' }}>
        <Greeting name = "Varika"></Greeting>
        <Greeting name = "Ashish"></Greeting>
        <Greeting name = "Guest"></Greeting>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);
