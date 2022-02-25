import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { DetailCard } from "../components/detail-card";
import Constants from "expo-constants";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { data } from "../public/data";

export const Passengers = ({ navigation }) => {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <SafeAreaView style={styles.parentWrap}>
      <ScrollView style={{ marginTop: statusBarHeight, flex: 1 }}>
        <Header />

        {data.map((user) => {
          return (
            <DetailCard key={user.id}>
              <View style={styles.profileWrap}>
                <View style={styles.imgWrap}>
                  <Image source={user.image} style={styles.img}></Image>
                </View>

                <View style={styles.nameWrap}>
                  <Text style={styles.bold}>{user.name}</Text>
                  <Text style={styles.bold}>{user.fare}</Text>
                  <View style={styles.paymentWrap}>
                    <Text>{user.paymentMethod}</Text>
                  </View>
                </View>

                <View style={styles.dateWrap}>
                  <Text style={styles.bold}>{user.date}</Text>
                  <Text>{user.time}</Text>
                  <Text>{user.distance}</Text>
                </View>
              </View>

              <View style={styles.pickupContainer}>
                <View style={styles.locationPointsContainer}>
                  <View style={styles.firstlocationPoint} />

                  <View style={styles.connector} />

                  <View style={styles.secondlocationPoint}></View>
                </View>

                <View style={styles.pickupWrap}>
                  <Text style={styles.pickupText}>Pick Up</Text>
                  <Text>{user.pickup}</Text>

                  <View style={styles.lineSeparatorContainer}>
                    <View style={styles.separator} />
                  </View>

                  <Text style={styles.dropOffText}>Drop off</Text>
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

const styles = StyleSheet.create({
  parentWrap: {
    flex: 1,
    backgroundColor: "white",
  },
  profileWrap: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imgWrap: {
    display: "flex",
    flexDirection: "column",
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 80,
  },
  nameWrap: {
    display: "flex",
    flexDirection: "column",
  },
  bold: {
    fontWeight: "bold",
  },
  paymentWrap: {
    backgroundColor: "#DEC20B",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  dateWrap: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 60,
  },
  pickupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 30,
  },
  locationPointsContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  firstlocationPoint: {
    width: 10,
    height: 10,
    backgroundColor: "#76B138",
    borderRadius: 16,
    padding: 8,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  connector: {
    borderColor: "#76B138",
    borderWidth: 1,
    borderRadius: 1,
    minHeight: 25,
  },
  secondlocationPoint: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 16,
    padding: 8,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  pickupWrap: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    marginLeft: 5,
  },
  pickupText: {
    color: "#76B138",
    fontWeight: "bold",
  },
  lineSeparatorContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  separator: {
    borderWidth: 1,
    width: "100%",
    borderColor: "gray",
  },
  dropOffText: {
    marginTop: 3,
    color: "#76B138",
    fontWeight: "bold",
  },
});
