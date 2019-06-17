/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, TextInput, Button, View } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    textValue: ""
  };

  textChangeHandler = val => {
    this.setState({ textValue: val });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            value={this.state.textValue}
            onChangeText={this.textChangeHandler}
            placeholder="Enter text here"
            style={{
              height: 40,
              width: "70%",
              borderColor: "black",
              borderWidth: 1,
              marginRight: 10
            }}
          />
          <Button
            style={{
              height: 40,
              width: "30%",
              padding: 10
            }}
            title="Press Me"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%",
    marginTop: 50
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#F5FCFF",
    margin: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
