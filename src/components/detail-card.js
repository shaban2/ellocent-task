import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export const DetailCard = (props) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 20,
    alignSelf: "center",
    borderRadius: 12,
    elevation: 2,
    flexDirection: "column",
    width: "80%",
    padding:20,
    shadowColor: "#000",
    shadowOpacity: 0.16,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  }
});
