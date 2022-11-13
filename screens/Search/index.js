import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Constants from "expo-constants";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontFamily: "Ubuntu_700Bold" }]}>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  }
})

