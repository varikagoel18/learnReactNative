import React, { Component } from "react";
import { TextInput, Button, View } from "react-native";
const placeInput = props => {
  return (
    <View>
      <TextInput
        value={props.placeName}
        onChangeText={props.onChangeText}
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
        onPress={props.onPress}
        title="Add Me"
      />
    </View>
  );
};

export default placeInput;
