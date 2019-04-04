/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,AppRegistry, Text, View, Image} from 'react-native';
import { Button } from 'react-native'

class FruitsButton extends Component{
  render(){
    return(
      <Button title={this.props.title}
              color={this.props.color}
              
              ></Button>
    );
  }
}
export default class Fruits extends Component {
  render() {

    _onPressButton() {
      Alert.alert('You tapped the button!')
    }
    
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={{alignContent:'center', margin:20 }}>
        <FruitsButton title = 'Banana' color = '#FFFF00' onPress={this._onPressButton} ></FruitsButton>
        <FruitsButton title = 'Orange' color = '#FFA500'></FruitsButton>
        <FruitsButton title = 'Apple' color = '#FF0000'></FruitsButton>

        <Image source={pic} style={{width: 193, height: 110 , margin:20}}/>

      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Fruits);
