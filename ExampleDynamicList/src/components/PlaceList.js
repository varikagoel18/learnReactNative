import React from "react";
import { ScrollView, View } from "react-native";

const placeList = props => {
  return <ScrollView>{props.list}</ScrollView>;
};

export default placeList;
