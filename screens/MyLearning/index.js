import { View, Text, ScrollView, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import styles from "./style";
import { Learning } from '../../assets/data/learning';
import { Icon } from "react-native-elements";
import { Chip, ProgressBar } from "react-native-paper";
import { MyCourses } from '../../assets/data/myLearning';

const FilteredButton = ({ callback, text, id, selectedIndex }) => {
  const clicked = selectedIndex === id;
  return (
    <View>
      <Chip
        mode="outlined"
        style={{ backgroundColor: clicked ? "white" : "transparent", borderWidth: 1, borderColor: "white", marginRight: 10 }}
        textStyle={{ color: clicked ? "black" : "white", fontFamily: "Ubuntu_400Regular" }}
        onPress={() => callback(id, text)}
      >
        {text}
      </Chip>
    </View>
  )
}

export default function MyLearning() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.topHeader}>
          <Text style={[styles.topHeaderText, { fontFamily: "Ubuntu_400Regular" }]}>My Courses</Text>
          <View style={styles.flex}>
            <Icon
              name="search"
              size={20}
              color="white"
              type="material"
              iconStyle={{ margin: 10 }}
            />
            <Icon
              name="shopping-cart"
              type="feather"
              color="white"
              size={20}
              iconStyle={{ margin: 10 }}
            />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          <View style={[styles.padding, styles.flex]}>
            {Learning.map((cat, i) => (
              <View style={[styles.flex]} key={i}>
                <FilteredButton
                  text={cat}
                  id={i}
                  selectedIndex={selectedIndex}
                  callback={(id) => setSelectedIndex(id)}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView>
        {MyCourses.map((item) => (
          <View style={styles.body} key={item.id}>
            <ImageBackground
              style={[styles.image]} source={item.image} imageStyle={{ borderRadius: 5 }}
            />
            <View style={styles.right}>
              <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>{item.title}</Text>
              <Text style={[styles.author, { fontFamily: "Ubuntu_300Light" }]}>{item.author}</Text>
              <ProgressBar progress={item.progress / 100} color="#5624d0" />
              <Text style={[styles.author, { fontFamily: "Ubuntu_300Light", paddingTop: 10 }]}>{item.progress}% complete</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}