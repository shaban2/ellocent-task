import React from "react";
import { View, SafeAreaView, Text, Image, StyleSheet } from "react-native";
import { DetailCard } from "../components/detail-card";
import Constants from "expo-constants";
import { Header } from "../components/header";
import { DetailsButton } from "../components/button";
import callIcon from "../assets/telephone.png";
import cancelIcon from "../assets/cancel-button.png";
import commentIcon from "../assets/comment.png";
import { data } from "../public/data";

export const PassengerDetails = ({ route }) => {
  const statusBarHeight = Constants.statusBarHeight;
  const { userId } = route.params;

  return (
    <SafeAreaView style={styles.parentWrap}>
      <View style={{ marginTop: statusBarHeight, flex: 1 }}>
        <Header />

        {data.map((user) => {
          return user.id == userId ? (
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
                  <Text style={styles.pickupText}>Pick up</Text>
                  <Text>{user.pickup}</Text>

                  <View style={styles.firstLineSeparatorContainer}>
                    <View style={styles.firstSeparator} />
                  </View>

                  <Text style={styles.dropOffText}>Drop off</Text>
                  <Text>{user.dropoff}</Text>
                </View>
              </View>
              <>
                <View style={styles.secondLineSeparatorContainer}>
                  <View style={styles.secondSeparator} />
                </View>
                <Text style={styles.notesTitle}>Noted</Text>
                <Text style={styles.notesText}>{user.Notes}</Text>
              </>

              <>
                <View style={styles.thirdLineSeparatorContainer}>
                  <View style={styles.thirdSeparator} />
                </View>
                <Text style={styles.fareText}>Ride Fare</Text>
                <View style={styles.fareContainer}>
                  <Text>Fare</Text>
                  <Text>{user.fare}</Text>
                </View>
                <View style={styles.discountContainer}>
                  <Text>Discount</Text>
                  <Text>{user.discount}</Text>
                </View>
                <View style={styles.totalContainer}>
                  <Text>Total Amount</Text>
                  <Text>{user.totalAmount}</Text>
                </View>
              </>
              <>
                <View style={styles.iconContainer}>
                  <View>
                    <Image source={callIcon} style={styles.callIcon}></Image>
                  </View>

                  <View>
                    <Image
                      source={commentIcon}
                      style={styles.commentIcon}
                    ></Image>
                  </View>

                  <View>
                    <Image
                      source={cancelIcon}
                      style={styles.cancelIcon}
                    ></Image>
                  </View>
                </View>
              </>
            </DetailCard>
          ) : null;
        })}
        <DetailsButton text="Go to pick up" onPress={() => console.log("here")} />
      </View>
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
  firstLineSeparatorContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  firstSeparator: {
    borderWidth: 1,
    width: "100%",
    borderColor: "gray",
  },
  dropOffText: {
    marginTop: 3,
    color: "#76B138",
    fontWeight: "bold",
  },
  secondLineSeparatorContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  secondSeparator: {
    borderWidth: 1,
    width: "100%",
    borderColor: "gray",
  },
  notesTitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
  notesText: {
    textAlign: "left",
    marginRight: 20,
  },
  thirdLineSeparatorContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  thirdSeparator: {
    borderWidth: 1,
    width: "100%",
    borderColor: "gray",
  },
  fareText: {
    fontWeight: "bold",
    marginTop: 10,
  },
  fareContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  discountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  callIcon: {
    height: 30,
    width: 30,
    tintColor: "#76B138",
  },
  commentIcon: {
    height: 30,
    width: 30,
    tintColor: "#76B138",
  },
  cancelIcon: {
    height: 30,
    width: 30,
  },
});
