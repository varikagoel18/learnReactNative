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
import img1 from ".//src/assets/img1.jpeg";
import img2 from ".//src/assets/img2.jpeg";
import img3 from ".//src/assets/img3.jpeg";
import img4 from ".//src/assets/download.png";
import PlaceDetail from ".//src/components/PlaceDetail";

export default class App extends Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  };

  textChangeHandler = val => {
    this.setState({ placeName: val });
  };

  deletePlaceHandler = itemKey => {
    this.setState(prevState => {
      return {
        places: Array.from(prevState.places).filter((item, i) => {
          return item.key !== itemKey;
        }),
        selectedPlace: null
      };
    });
  };

  selectPlaceHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: Array.from(prevState.places).find(place => {
          return place.key === key;
        })
      };
    });
  };

  modalClosedHandler = () => {
    this.setState(prevState => {
      return {
        selectedPlace: null
      };
    });
  };

  addPlaceHandler = event => {
    if (this.state.placeName.trim() === "") {
      alert("Please add a place");
      return;
    }

    const random = Math.floor(Math.random() * 10) + 1;

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: random + this.state.placeName,
          name: this.state.placeName,
          image: {
            uri:
              "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
        })
      };
    });

    this.setState({ placeName: "" });
    console.log("array : " + this.state.places.length);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          deletePlace={this.deletePlaceHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          style={styles.innerContainer}
          placeName={this.state.placeName}
          onChangeText={this.textChangeHandler}
          onPress={this.addPlaceHandler}
        />
        <PlaceList
          data={this.state.places}
          onItemPressed={this.selectPlaceHandler}
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
