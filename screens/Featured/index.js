import { View, Text, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from "./style";
import { Icon, Rating } from "react-native-elements";
import { Chip } from "react-native-paper";
import { Categories } from '../../assets/data/categories';
import { Business, Design, FullStack } from '../../assets/data/courses';

export default function Featured({ navigation }) {
    const [visible, setVisible] = React.useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.header}>
                <View style={styles.topCart}>
                    <View />
                    <View />
                    <Icon
                        name="shopping-cart"
                        type="feather"
                        color="white"
                        size={20}
                        iconStyle={{ margin: 10 }}
                        onPress={() => setVisible(false)}
                    />
                </View>
                {
                    visible && (
                        <View style={styles.topHeader}>
                            <View />
                            <Text style={[styles.topHeaderText, { fontFamily: "Ubuntu_400Regular" }]}>
                                Future-ready skills on your schedule
                            </Text>
                            <Icon
                                name="x"
                                type="feather"
                                color="white"
                                size={20}
                                iconStyle={{ margin: 5 }}
                                onPress={() => setVisible(false)}
                            />
                        </View>
                    )
                }
                <ImageBackground
                    style={[styles.topHeaderImage]} source={require("../../assets/home.png")}
                />

                <View style={styles.body}>
                    <View style={{ padding: 20 }}>
                        <Text style={[styles.bodyHeader, { fontFamily: "Ubuntu_700Bold" }]}>Learning that fits</Text>
                        <Text style={[styles.bodySubHeader, { fontFamily: "Ubuntu_300Light" }]}>Skills for your present (and future)</Text>
                    </View>

                    <View style={styles.category}>
                        <Text style={[styles.categoryText, { fontFamily: "Ubuntu_700Bold" }]}>Categories</Text>
                        <Text style={[styles.seeAll, { fontFamily: "Ubuntu_700Bold" }]}>See all</Text>
                    </View>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginTop: 10 }}
                    >
                        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                            <View style={styles.flex}>
                                {Categories.slice(0, 7).map((cat, i) => (
                                    <View style={styles.flex} key={i}>
                                        <Chip
                                            mode="outlined"
                                            style={{ backgroundColor: "transparent", borderWidth: 1, borderColor: "white", marginRight: 10 }}
                                            textStyle={{ color: "white", fontFamily: "Ubuntu_400Regular", fontSize: 12 }}
                                        >
                                            {cat}
                                        </Chip>
                                    </View>
                                ))}
                            </View>
                            <View style={styles.flex}>
                                {Categories.slice(7).map((cat, i) => (
                                    <View style={styles.flex} key={i}>
                                        <Chip
                                            mode="outlined"
                                            style={{ backgroundColor: "transparent", borderWidth: 1, borderColor: "white", marginRight: 10 }}
                                            textStyle={{ color: "white" }}
                                        >
                                            {cat}
                                        </Chip>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </ScrollView>

                    <View style={{ padding: 20 }}>
                        <Text style={[styles.categoryText, { fontFamily: "Ubuntu_700Bold" }]}>Our top pick for you</Text>
                        <Image
                            style={styles.topPicks}
                            resizeMode={"contain"}
                            source={{ uri: "https://img-b.udemycdn.com/course/480x270/1518026_77fb_4.jpg" }}
                        />
                        <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>Javascript Tutorial and Projects Course (2022)</Text>
                        <Text style={[styles.author, { fontFamily: "Ubuntu_300Light" }]}>John Smilga</Text>
                        <View style={styles.flex}>
                            <Text style={[styles.rating, { fontFamily: "Ubuntu_400Regular" }]}>4.8</Text>
                            <Rating
                                imageSize={12}
                                tintColor={"black"}
                                readonly
                                startingValue={4.8}
                                ratingBackgroundColor="gray"
                                type='custom'
                                style={{ marginLeft: 5, marginRight: 5 }}
                                ratingColor="#b4690e"
                            />
                            <Text style={[styles.downloads, { fontFamily: "Ubuntu_300Light" }]}>{"(3,322)"}</Text>
                        </View>
                        <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>NGN 4,500.00</Text>
                    </View>

                    <View>
                        <View style={{ padding: 20 }}>
                            <Text style={[styles.seeAll, { fontFamily: "Ubuntu_700Bold", paddingBottom: 10 }]}>Edit profession</Text>
                            <Text style={[styles.categoryText, { fontFamily: "Ubuntu_700Bold" }]}>Popular for aspiring Full Stack Web Developers</Text>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{}}
                        >
                            {FullStack.slice(0, 6).map((full) => (
                                <View style={styles.section} key={full.id}>
                                    <ImageBackground
                                        style={[styles.sectionImage]}
                                        resizeMode={"contain"}
                                        imageStyle={{ borderRadius: 10 }}
                                        source={full.image}
                                    />
                                    <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>{full.title}</Text>
                                    <Text style={[styles.author, { fontFamily: "Ubuntu_300Light" }]}>{full.author}</Text>
                                    <View style={styles.flex}>
                                        <Text style={[styles.rating, { fontFamily: "Ubuntu_400Regular" }]}>{full.rating}</Text>
                                        <Rating
                                            imageSize={12}
                                            tintColor={"black"}
                                            readonly
                                            startingValue={full.rating}
                                            ratingBackgroundColor="gray"
                                            type='custom'
                                            style={{ marginLeft: 5, marginRight: 5 }}
                                            ratingColor="#b4690e"
                                        />
                                        <Text style={[styles.downloads, { fontFamily: "Ubuntu_300Light" }]}>{`(${full.students})`}</Text>
                                    </View>
                                    <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>NGN {full.price}</Text>
                                    {full.bestseller && <View style={styles.bestSeller}>
                                        <Text style={[styles.bestSellerText, { fontFamily: "Ubuntu_700Bold" }]}>Bestseller</Text>
                                    </View>}
                                </View>
                            ))}
                            <TouchableOpacity style={[styles.category, { margin: 20 }]} onPress={() => navigation.navigate("Details", { type: "Web" })}>
                                <Text style={[styles.seeAll, { fontFamily: "Ubuntu_700Bold" }]}>See all</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    <View>
                        <View style={{ padding: 20 }}>
                            <Text style={[styles.categoryText, { fontFamily: "Ubuntu_700Bold" }]}>
                                Top courses in <Text style={[styles.categoryHighlight, { fontFamily: "Ubuntu_700Bold" }]}>Design</Text>
                            </Text>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{}}
                        >
                            {Design.slice(0, 6).map((full) => (
                                <View style={styles.section1} key={full.id}>
                                    <ImageBackground
                                        style={[styles.sectionImage1]}
                                        imageStyle={{ borderRadius: 10 }}
                                        source={full.image}
                                        resizeMode={"contain"}
                                    />
                                    <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>{full.title}</Text>
                                    <Text style={[styles.author, { fontFamily: "Ubuntu_300Light" }]}>{full.author}</Text>
                                    <View style={styles.flex}>
                                        <Text style={[styles.rating, { fontFamily: "Ubuntu_400Regular" }]}>{full.rating}</Text>
                                        <Rating
                                            imageSize={12}
                                            tintColor={"black"}
                                            readonly
                                            startingValue={full.rating}
                                            ratingBackgroundColor="gray"
                                            type='custom'
                                            style={{ marginLeft: 5, marginRight: 5 }}
                                            ratingColor="#b4690e"
                                        />
                                        <Text style={[styles.downloads, { fontFamily: "Ubuntu_300Light" }]}>{`(${full.students})`}</Text>
                                    </View>
                                    <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>NGN {full.price}</Text>
                                    {full.bestseller && <View style={styles.bestSeller}>
                                        <Text style={[styles.bestSellerText, { fontFamily: "Ubuntu_700Bold" }]}>Bestseller</Text>
                                    </View>}
                                </View>
                            ))}
                            <TouchableOpacity style={[styles.category, { margin: 20 }]} onPress={() => navigation.navigate("Details", { type: "Design" })}>
                                <Text style={[styles.seeAll, { fontFamily: "Ubuntu_700Bold" }]}>See all</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    <View>
                        <View style={{ padding: 20 }}>
                            <Text style={[styles.categoryText, { fontFamily: "Ubuntu_700Bold" }]}>
                                Top courses in <Text style={[styles.categoryHighlight, { fontFamily: "Ubuntu_700Bold" }]}>Business</Text>
                            </Text>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{}}
                        >
                            {Business.slice(0, 6).map((full) => (
                                <View style={styles.section1} key={full.id}>
                                    <ImageBackground
                                        style={[styles.sectionImage1]}
                                        imageStyle={{ borderRadius: 10 }}
                                        source={full.image}
                                        resizeMode={"contain"}
                                    />
                                    <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>{full.title}</Text>
                                    <Text style={[styles.author, { fontFamily: "Ubuntu_300Light" }]}>{full.author}</Text>
                                    <View style={styles.flex}>
                                        <Text style={[styles.rating, { fontFamily: "Ubuntu_400Regular" }]}>{full.rating}</Text>
                                        <Rating
                                            imageSize={12}
                                            tintColor={"black"}
                                            readonly
                                            startingValue={full.rating}
                                            ratingBackgroundColor="gray"
                                            type='custom'
                                            style={{ marginLeft: 5, marginRight: 5 }}
                                            ratingColor="#b4690e"
                                        />
                                        <Text style={[styles.downloads, { fontFamily: "Ubuntu_300Light" }]}>{`(${full.students})`}</Text>
                                    </View>
                                    <Text style={[styles.pickText, { fontFamily: "Ubuntu_400Regular" }]}>NGN {full.price}</Text>
                                    {full.bestseller && <View style={styles.bestSeller}>
                                        <Text style={[styles.bestSellerText, { fontFamily: "Ubuntu_700Bold" }]}>Bestseller</Text>
                                    </View>}
                                </View>
                            ))}
                            <TouchableOpacity style={[styles.category, { margin: 20 }]} onPress={() => navigation.navigate("Details", { type: "Business" })}>
                                <Text style={[styles.seeAll, { fontFamily: "Ubuntu_700Bold" }]}>See all</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}