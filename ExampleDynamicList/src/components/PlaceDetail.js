import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const placeDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    const name = props.selectedPlace.name;
    const image = props.selectedPlace.image;
    modalContent = (
      <View style={styles.item}>
        <Image source={image} style={styles.placeImage} />
        <Text style={((marginTop = 20), (color = "#787878"))}> {name} </Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
      <View>
        {modalContent}
        <View>
          <Button
            onPress={() => props.deletePlace(props.selectedPlace.key)}
            title="Delete"
            color="red"
          />
          <Button title="Cancel" color="black" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 330,
    padding: 2,
    backgroundColor: "white",
    alignItems: "center",
    color: "black"
  },
  placeImage: {
    marginTop: 35,
    width: 250,
    height: 250,
    fontSize: 22
  }
});
export default placeDetail;
