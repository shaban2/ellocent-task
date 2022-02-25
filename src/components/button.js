import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const Button = (props) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const DetailsButton = (props) => {
  return (
    <View style={styles.detailButtonWrapper}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.detailButton}
        onPress={props.onPress}
      >
        <Text style={styles.detailButtonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "center",
    marginLeft: 15,
    marginTop: 20,
  },
  button: {
    width: "80%",
    height: 40,
    borderRadius: 20,
    backgroundColor: "#76B138",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    paddingTop: 10,
    fontWeight: "bold",
  },
  detailButtonWrapper: {
    alignItems: "center",
    marginLeft: 15,
    marginTop: 20,
  },
  detailButton: {
    width: "60%",
    height: 50,
    borderRadius: 30,
    backgroundColor: "#76B138",
  },
  detailButtonText: {
    textAlign: "center",
    color: "white",
    paddingTop: 15,
    fontWeight: "bold",
  },
});
