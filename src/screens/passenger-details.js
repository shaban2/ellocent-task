import React from "react";
import { View, SafeAreaView, Text, Image } from "react-native";
import { DetailCard } from "../components/detail-card";
import Constants from "expo-constants";
import { Header } from "../components/header";
import { Button } from "../components/button";
import callIcon from "../assets/telephone.png";
import cancelIcon from "../assets/cancel-button.png";
import commentIcon from "../assets/comment.png";
import { data } from "../public/data";

export const PassengerDetails = ({ route }) => {
  const statusBarHeight = Constants.statusBarHeight;
  const pillSize = { width: 16 * 2, height: 20 * 2 };
  const { userId } = route.params;
  console.log(userId);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ marginTop: statusBarHeight, flex: 1 }}>
        <Header />

        {data.map((user) => {
          return user.id == userId ? (
            <DetailCard key={user.id}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <View style={{ display: "flex", flexDirection: "column" }}>
                  <Image
                    source={user.image}
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
                    Pick up
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
              <>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderRadius: 1,
                      width: "100%",
                      borderColor: "gray",
                    }}
                  />
                </View>
                <Text style={{ fontWeight: "bold", marginTop: 5 }}>Noted</Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    marginRight: 20,
                  }}
                >
                  {user.Notes}
                </Text>
              </>

              <>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                  <View
                    style={{
                      borderWidth: 1,
                      borderRadius: 1,
                      width: "100%",
                      borderColor: "gray",
                    }}
                  />
                </View>
                <Text style={{ fontWeight: "bold", marginTop: 5 }}>
                  Ride Fare
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                  }}
                >
                  <Text>Fare</Text>
                  <Text>{user.fare}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                  }}
                >
                  <Text>Discount</Text>
                  <Text>{user.discount}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                  }}
                >
                  <Text>Total Amount</Text>
                  <Text>{user.totalAmount}</Text>
                </View>
              </>
              <>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Image
                      source={callIcon}
                      style={{ height: 30, width: 30, tintColor: "green" }}
                    ></Image>
                  </View>

                  <View>
                    <Image
                      source={commentIcon}
                      style={{ height: 30, width: 30, tintColor: "green" }}
                    ></Image>
                  </View>

                  <View>
                    <Image
                      source={cancelIcon}
                      style={{ height: 30, width: 30 }}
                    ></Image>
                  </View>
                </View>
              </>

              <Button
                text="Go to pick up"
                onPress={() => console.log("here")}
              />
            </DetailCard>
          ) : null;
        })}
      </View>
    </SafeAreaView>
  );
};
