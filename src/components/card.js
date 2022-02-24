import React from "react";
import { TouchableOpacity, View } from "react-native";

export const BottomCard = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "white",
        padding: 20,
        paddingBottom: 40,
        paddingTop: 40,
        borderTopStartRadius: 35,
        borderTopEndRadius: 35,
      }}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};
