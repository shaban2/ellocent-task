import React from "react";
import { View, SafeAreaView, Text, Image } from "react-native";
import Constants from "expo-constants";
import { BottomCard } from "../components/card";
import { Header } from "../components/header";
import map from "../assets/map.png";
import { data } from "../public/data";

export const HomeScreen = ({ navigation }) => {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: statusBarHeight, flex: 1 }}>
        <Header />
        <View style={{ flex: 1 }}>
          <Image source={map} style={{ height: 600, width: "100%" }}></Image>
        </View>
        {data.map((user) => {
          return user.id == 1 ? (
            <BottomCard
              onPress={() => navigation.navigate("Passengers")}
              key={user.id}
            >
              <View
                style={{
                  borderBottomWidth: 4,
                  borderBottomColor: "green",
                  width: 50,
                  marginLeft: 160,
                  marginBottom: 30,
                }}
              />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Image
                    source={`${user.image}`}
                    style={{ height: 60, width: 60, borderRadius: 80 }}
                  ></Image>
                </View>

                <View style={{ display: "flex", flexDirection: "column", marginTop:5 }}>
                  <Text style={{ fontWeight: "bold" }}>{user.name}</Text>
                  <Text>{user.level}</Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 60,
                    marginTop:5
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{user.discount}</Text>
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
