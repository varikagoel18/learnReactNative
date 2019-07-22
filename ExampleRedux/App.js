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
// import img1 from ".//src/assets/img1.jpeg";
// import img2 from ".//src/assets/img2.jpeg";
// import img3 from ".//src/assets/img3.jpeg";
// import img4 from ".//src/assets/download.png";
import PlaceDetail from ".//src/components/PlaceDetail";
import { connect } from "react-redux";
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace,
  updatePlace
} from "./src/store/actions/index";

class App extends Component {
  textChangeHandler = val => {
    this.props.onUpdatePlace(val);
  };

  deletePlaceHandler = () => {
    this.props.onDeletePlace();
  };

  selectPlaceHandler = key => {
    this.props.onSelectPlace(key);
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  addPlaceHandler = event => {
    if (this.props.placeName.trim() === "") {
      alert("Please add a place");
      return;
    }
    this.props.onAddPlace(this.props.placeName);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          deletePlace={this.deletePlaceHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput
          style={styles.innerContainer}
          placeName={this.props.placeName}
          onChangeText={this.textChangeHandler}
          onPress={this.addPlaceHandler}
        />
        <PlaceList
          data={this.props.places}
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

const mapStateToProps = state => {
  return {
    placeName: state.places.placeName,
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onUpdatePlace: name => dispatch(updatePlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
