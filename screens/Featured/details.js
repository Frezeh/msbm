import { View, Text, ImageBackground, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler'
import React from 'react'
import styles from "../MyLearning/style";
import { Icon, Rating } from "react-native-elements";
import { Business, Design, FullStack } from '../../assets/data/courses';

export default function Details({ navigation, route }) {
    const { type } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topHeader}>
                <Icon
                    name="arrow-back-ios"
                    type="material"
                    color="white"
                    size={20}
                    iconStyle={{ marginTop: 5 }}
                    onPress={() => navigation.goBack()}
                />
                <Text style={[styles.topDetailsText, { fontFamily: "Ubuntu_400Regular" }]}>
                    {type === "Web" ? "Top courses in Web Development" : type === "Design" ? "Top courses in Design" : "Top courses in Business"}
                </Text>
                <Icon
                    name="filter-list"
                    type="material"
                    color="white"
                    size={20}
                    iconStyle={{ margin: 5 }}
                />
            </View>

            <ScrollView style={{ height: '100%', width: "100%" }}>
                {type === "Web" && <View style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {FullStack.map((item) => (
                        <View style={styles.detailsBody} key={item.id}>
                            <ImageBackground
                                style={[styles.image]} source={item.image} imageStyle={{ borderRadius: 5 }}
                            />
                            <View style={styles.right}>
                                <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>{item.title}</Text>
                                <Text style={[styles.author, { fontFamily: "Ubuntu_300Light" }]}>{item.author}</Text>
                                <View style={[styles.flex, {paddingBottom: 5}]}>
                                    <Text style={[styles.rating, { fontFamily: "Ubuntu_400Regular" }]}>{item.rating}</Text>
                                    <Rating
                                        imageSize={12}
                                        tintColor={"black"}
                                        readonly
                                        startingValue={item.rating}
                                        ratingBackgroundColor="gray"
                                        type='custom'
                                        style={{ marginLeft: 5, marginRight: 5 }}
                                        ratingColor="#b4690e"
                                    />
                                    <Text style={[styles.downloads, { fontFamily: "Ubuntu_300Light" }]}>{`(${item.students})`}</Text>
                                </View>
                                <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>NGN {item.price}</Text>
                                {item.bestseller && <View style={styles.bestSeller}>
                                    <Text style={[styles.bestSellerText, { fontFamily: "Ubuntu_700Bold" }]}>Bestseller</Text>
                                </View>}
                            </View>
                        </View>
                    ))}
                </View>}

                {type === "Design" && <View style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {Design.map((item) => (
                        <View style={styles.detailsBody} key={item.id}>
                            <ImageBackground
                                style={[styles.image]} source={item.image} imageStyle={{ borderRadius: 5 }}
                            />
                            <View style={styles.right}>
                                <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>{item.title}</Text>
                                <Text style={[styles.author, { fontFamily: "Ubuntu_300Light" }]}>{item.author}</Text>
                                <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>NGN {item.price}</Text>

                                {item.bestseller && <View style={styles.bestSeller}>
                                    <Text style={[styles.bestSellerText, { fontFamily: "Ubuntu_700Bold" }]}>Bestseller</Text>
                                </View>}
                            </View>
                        </View>
                    ))}
                </View>}

                {type === "Business" && <View style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {Business.map((item) => (
                        <View style={styles.detailsBody} key={item.id}>
                            <ImageBackground
                                style={[styles.image]} source={item.image} imageStyle={{ borderRadius: 5 }}
                            />
                            <View style={styles.right}>
                                <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>{item.title}</Text>
                                <Text style={[styles.author, { fontFamily: "Ubuntu_300Light" }]}>{item.author}</Text>
                                <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>NGN {item.price}</Text>

                                {item.bestseller && <View style={styles.bestSeller}>
                                    <Text style={[styles.bestSellerText, { fontFamily: "Ubuntu_700Bold" }]}>Bestseller</Text>
                                </View>}
                            </View>
                        </View>
                    ))}
                </View>}
            </ScrollView>
        </SafeAreaView>
    )
}