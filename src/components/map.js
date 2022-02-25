import React from "react";
import { View, Image, StyleSheet } from "react-native";
import map from "../assets/map.png";

export const Map = () => {
  return (
    <View>
      <View>
        <Image source={map} style={styles.img}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 600,
    width: "100%",
  }
});
