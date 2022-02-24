import React from "react";
import { View, Text, Image } from "react-native";
import { Switch } from "react-native-paper";
import menuIcon from "../assets/menu.png";

export const Header = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Image source={menuIcon} style={{ height: 30, width: 30 }}></Image>
      {isSwitchOn ? (
        <Text style={{ marginTop: 5 }}>You are Online</Text>
      ) : (
        <Text style={{ marginTop: 5 }}> You are Offline</Text>
      )}

      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{color:"green"}} />
    </View>
  );
};
