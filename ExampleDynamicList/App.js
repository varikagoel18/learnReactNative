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
  ScrollView
} from "react-native";
import ListItem from ".//src/components/ListItem";
import PlaceInput from ".//src/components/PlaceInput";

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
    if (this.state.placeName.trim() === "") {
      alert("Please add a place");
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });

    this.setState({ placeName: "" });
    console.log("array : " + this.state.places.length);
  };

  render() {
    const listShowPlaces = this.state.places.map((pName, index) => (
      <ListItem
        key={pName + index}
        placeName={pName}
        onItemPressed={() => alert("Item pressed:" + pName + ", ID" + index)}
      />
    ));

    return (
      <View style={styles.container}>
        <PlaceInput
          style={styles.innerContainer}
          placeName={this.state.placeName}
        />
        <View style={styles.innerList}>
          <ScrollView>{listShowPlaces}</ScrollView>
        </View>
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
