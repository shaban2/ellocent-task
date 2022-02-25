import React from "react";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { BottomCard } from "../components/card";
import { Header } from "../components/header";
import { Map } from "../components/map";
import { data } from "../public/data";

export const HomeScreen = ({ navigation }) => {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <SafeAreaView style={styles.wrappers}>
      <View style={{ marginTop: statusBarHeight, flex: 1 }}>
        <Header />
        <View style={styles.wrappers}>
          <Map />
        </View>
        {data.map((user) => {
          return user.id == 1 ? (
            <BottomCard
              onPress={() => navigation.navigate("Passengers")}
              key={user.id}
            >
              <View style={styles.dash} />
              <View style={styles.lineBreak} />

              <View style={styles.container}>
                <View style={styles.imgContainer}>
                  <Image source={user.image} style={styles.img}></Image>
                </View>

                <View style={styles.levelWrap}>
                  <Text style={styles.text}>{user.name}</Text>
                  <Text>{user.level}</Text>
                </View>

                <View style={styles.earnedWrap}>
                  <Text style={styles.text}>{user.discount}</Text>
                  <Text>Earned</Text>
                </View>
              </View>
            </BottomCard>
          ) : null;
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dash: {
    borderBottomWidth: 4,
    borderBottomColor: "#76B138",
    width: 50,
    alignSelf: "center",
    flexDirection: "column",
    marginLeft: 10
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 80,
  },
  levelWrap: {
    display: "flex",
    flexDirection: "column",
    marginTop: 5,
  },
  text: {
    fontWeight: "bold",
  },
  wrappers: {
    flex: 1,
  },
  lineBreak: {
    paddingBottom: 30,
  },
  earnedWrap: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 60,
    marginTop: 5,
  },
});
