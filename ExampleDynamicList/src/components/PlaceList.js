import React from "react";
import { FlatList, View, Image } from "react-native";
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
          image={info.item.image}
        />
      )}
    />
  );
};

export default placeList;
