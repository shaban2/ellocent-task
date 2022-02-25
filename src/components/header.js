import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Switch } from "react-native-paper";
import menuIcon from "../assets/menu.png";

export const Header = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.headerWrapper}>
      <Image source={menuIcon} style={styles.icon}></Image>
      {isSwitchOn ? (
        <Text style={styles.text}>You're Online</Text>
      ) : (
        <Text style={styles.text}> You're Offline</Text>
      )}

      <Switch
        value={isSwitchOn}
        onValueChange={onToggleSwitch}
        color={"#76B138"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight:40,
    marginLeft:40,
    marginTop:20,
    marginBottom:5,
  },
  icon: {
    height: 30,
    width: 30,
  },
  text: {
    fontWeight: "bold",
  },
});
