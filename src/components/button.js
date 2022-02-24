import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export const Button = (props) => {
  return (
    <View style={{alignItems:"center",marginLeft:15, marginTop:20}}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          width: "80%",
          height: 40,
          borderRadius: 20,
          backgroundColor: "green",
        }}
        onPress={props.onPress}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: 10,
            fontWeight:"bold"
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
