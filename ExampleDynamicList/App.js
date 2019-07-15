/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PlaceInput from ".//src/components/PlaceInput";
import PlaceList from ".//src/components/PlaceList";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
  };

  textChangeHandler = val => {
    this.setState({ placeName: val });
  };

  deleteItemHandler = itemKey => {
    this.setState(prevState => {
      return {
        places: Array.from(prevState.places).filter((item, i) => {
          return item.key !== itemKey;
        })
      };
    });
  };

  addPlaceHandler = event => {
    if (this.state.placeName.trim() === "") {
      alert("Please add a place");
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: this.state.placeName
        })
      };
    });

    this.setState({ placeName: "" });
    console.log("array : " + this.state.places.length);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput
          style={styles.innerContainer}
          placeName={this.state.placeName}
          onChangeText={this.textChangeHandler}
          onPress={this.addPlaceHandler}
        />
        <PlaceList
          data={this.state.places}
          onItemPressed={this.deleteItemHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    marginTop: 50
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  innerList: {
    flex: 6,
    flexDirection: "row",
    alignItems: "flex-start"
  }
});
