import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/home';
import { NavigationContainer } from "@react-navigation/native";
import { Passengers } from "./screens/passengers";
import { PassengerDetails } from "./screens/passenger-details";

const Stack = createStackNavigator();

export function ScreenStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName={"Home"} headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Passengers" component={Passengers} />
      <Stack.Screen name="PassengerDetails" component={PassengerDetails} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}