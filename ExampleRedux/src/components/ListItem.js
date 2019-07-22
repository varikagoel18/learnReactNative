import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";

const listItem = props => {
  return (
    <TouchableHighlight onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image
          style={styles.placeImage}
          source={props.image}
          resizeMode="center"
          resizeMethod="auto"
        />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    padding: 2,
    backgroundColor: "pink",
    marginBottom: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 5,
    width: 45,
    height: 45
  }
});
export default listItem;
