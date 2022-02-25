import React from "react";
import { TouchableOpacity, StyleSheet} from "react-native";

export const BottomCard = (props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 40,
    paddingTop: 20,
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
  },
});
