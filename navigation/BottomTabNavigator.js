import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import {
  FeaturedScreenNavigator,
  SearchScreenNavigator,
  MyLearningScreenNavigator,
  WishlistScreenNavigator,
  AccountScreenNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Featured") {
            return (
              <Icon
                name={focused ? "star" : "star-outline"}
                size={size}
                color={color}
                type="ionicon"
              />
            );
          }
          if (route.name === "Search") {
            return (
              <Icon
                name={focused ? "search" : "search"}
                size={size}
                color={color}
                type="material"
              />
            );
          }
          if (route.name === "My Learning") {
            return (
              <Icon
                name={focused ? "play-circle-fill" : "play-circle-outline"}
                size={size}
                color={color}
                type="material"
              />
            );
          }
          if (route.name === "Wishlist") {
            return (
              <Icon
                name={focused ? "heart-sharp" : "heart-outline"}
                size={size}
                color={color}
                type="ionicon"
              />
            );
          }
          if (route.name === "Account") {
            return (
              <Icon
                name={focused ? "person-circle" : "person-circle-outline"}
                size={size}
                color={color}
                type="ionicon"
              />
            );
          }
        },
      })}
      tabBarOptions={{
        labelStyle: { fontSize: 12, fontWeight: "bold", fontFamily: "Ubuntu_400Regular" },
        activeTintColor: "white",
        inactiveTintColor: "gray",
        style: { backgroundColor: "black" }
      }}
    >
      <Tab.Screen name="Featured" component={FeaturedScreenNavigator} />
      <Tab.Screen name="Search" component={SearchScreenNavigator} />
      <Tab.Screen name="My Learning" component={MyLearningScreenNavigator} />
      <Tab.Screen name="Wishlist" component={WishlistScreenNavigator} />
      <Tab.Screen name="Account" component={AccountScreenNavigator} />
    </Tab.Navigator>
  );
};
