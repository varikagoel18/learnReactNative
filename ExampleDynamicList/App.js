/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  TextInput,
  Button,
  View,
  Text
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    placeName: "",
    places: ["sample"]
  };

  textChangeHandler = val => {
    //  console.log(this.state.placeName);
    this.setState({ placeName: val });
  };

  addPlaceHandler = event => {
    // console.log("test");
    // console.log("" + this.state.placeName);
    // if (this.state.placeName.trim() === "") {
    //   alert("Add a place name");
    //   return;
    // }
    // const prevPlaces = this.state.places;

    // const error = prevPlaces.map(pName => {
    //   return pName === this.state.placeName ? true : false;
    // });

    // if (error) {
    //   alert("Place already in list. Add another");
    //   return;
    // }

    // this.setState({ places: new_places });
    // const listShowPlaces = this.state.places.map(plce => {
    //   <Text>test</Text>;
    // });
    // console.log(":::::::::::"+listShowPlaces)
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });

    console.log("array : " + this.state.places.length);
  };

  render() {
    const listShowPlaces = this.state.places.map((pName, index) => (
      <Text key={pName + index}> {pName}</Text>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <TextInput
            value={this.state.placeName}
            onChangeText={this.textChangeHandler}
            placeholder="Enter place name"
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
            onPress={this.addPlaceHandler}
            title="Add Me"
          />
        </View>
        <View>
          <Text>---------------------------------- </Text>
        </View>
        <View>{listShowPlaces}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F5FCFF",
    alignItems: "flex-start",
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
  }
});
