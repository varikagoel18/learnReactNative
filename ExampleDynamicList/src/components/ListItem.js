import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const listItem = props => {
  return (
    <TouchableHighlight onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 10,
    backgroundColor: "pink",
    marginBottom: 2
  }
});
export default listItem;
