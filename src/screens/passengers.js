import React from "react";
import { View, SafeAreaView, ScrollView, Text, Image } from "react-native";
import { DetailCard } from "../components/detail-card";
import Constants from "expo-constants";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { data } from "../public/data";

export const Passengers = ({ navigation }) => {
  const statusBarHeight = Constants.statusBarHeight;
  const pillSize = { width: 16 * 2, height: 20 * 2 };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: statusBarHeight, flex: 1 }}>
        <Header />

        {data.map((user) => {
          return (
            <DetailCard key={user.id}>
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

                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Text style={{ fontWeight: "bold" }}>{user.name}</Text>
                  <Text>{user.fare}</Text>
                  <View
                    style={{
                      backgroundColor: "#DEC20B",
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 2,
                    }}
                  >
                    <Text>{user.paymentMethod}</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 60,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{user.date}</Text>
                  <Text>{user.time}</Text>
                  <Text>{user.distance}</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 30,
                  marginTop: 10,
                }}
              >
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View
                    style={{
                      pillSize,
                      backgroundColor: "green",
                      borderRadius: 16,
                      padding: 8,
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  />

                  <View
                    style={{
                      borderColor: "green",
                      borderWidth: 1,
                      borderRadius: 1,
                      flex: 1,
                      minHeight: 16,
                    }}
                  />

                  <View
                    style={{
                      pillSize,
                      backgroundColor: "red",
                      borderRadius: 16,
                      padding: 8,
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  ></View>
                </View>

                <View
                  style={{
                    flex: 1,
                    justifyContent: "space-between",
                    flexDirection: "column",
                    marginLeft: 5,
                  }}
                >
                  <Text style={{ color: "green", fontWeight: "bold" }}>
                    Pick Up
                  </Text>
                  <Text>{user.pickup}</Text>

                  <View style={{ flexDirection: "row", marginTop: 5 }}>
                    <View
                      style={{
                        borderWidth: 1,
                        borderRadius: 1,
                        width: "100%",
                        borderColor: "gray",
                      }}
                    />
                  </View>

                  <Text
                    style={{ marginTop: 5, color: "green", fontWeight: "bold" }}
                  >
                    Drop off
                  </Text>
                  <Text>{user.dropoff}</Text>
                </View>
              </View>

              <Button
                text="Accept"
                onPress={() =>
                  navigation.navigate("PassengerDetails", {
                    userId: user.id,
                  })
                }
              />
            </DetailCard>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
