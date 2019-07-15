import React from "react";
import { FlatList, View } from "react-native";
import ListItem from "./ListItem";

const placeList = props => {
  // const listShowPlaces = Array.from(props.data).map((place, index) => (

  // ));
  return (
    <FlatList
      data={Array.from(props.data)}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          onItemPressed={() => props.onItemPressed(info.item.key)}
        />
      )}
    />
  );
};

export default placeList;
