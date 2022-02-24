import React from "react";
import { TouchableOpacity } from "react-native";

export const DetailCard = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        margin: 20,
        alignSelf: "center",
        borderRadius: 12,
        elevation: 2,
        flexDirection: "column",
        width: "90%",
        padding:20,
        shadowColor: "#000",
        shadowOpacity: 0.16,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 0,
        },
      }}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};
