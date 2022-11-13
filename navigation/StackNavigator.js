import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Featured from "../screens/Featured";
import Search from "../screens/Search";
import MyLearning from "../screens/MyLearning";
import Wishlist from "../screens/Wishlist";
import Account from "../screens/Account";
import Details from "../screens/Featured/details";

const Stack = createStackNavigator();

const screenOptionStyle = {
  gestureEnabled: true,
  headerShown: false,
};

const FeaturedScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Featured" component={Featured} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const SearchScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

const MyLearningScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="MyLearning" component={MyLearning} />
    </Stack.Navigator>
  );
};

const WishlistScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  );
};

const AccountScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
};

export {
  FeaturedScreenNavigator,
  SearchScreenNavigator,
  WishlistScreenNavigator,
  AccountScreenNavigator,
  MyLearningScreenNavigator,
};
