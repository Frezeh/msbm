import { StyleSheet, Platform } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: Constants.statusBarHeight
    },
    flex: {
        display: "flex",
        flexDirection: "row",
        paddingBottom: 5
    },
    header: {
    },
    topCart: {
        width: wp("100%"),
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    topHeader: {
        width: wp("100%"),
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#6A5ACD",
    },
    topHeaderText: {
        fontSize: 13,
        color: "white"
    },
    topHeaderImage: {
        width: wp("100%"),
        height: 200
    },
    body: {
    },
    bodyHeader: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    bodySubHeader: {
        fontSize: 13,
        color: "white"
    },
    category: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    categoryText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white"
    },
    categoryHighlight: {
        color: "#5624d0",
    },
    seeAll: {
        fontSize: 13,
        color: "#5624d0",
    },
    topPicks: {
        width: wp("90%"),
        height: 200,
        marginTop: 7,
        marginBottom: 7,
        borderRadius: 10
    },
    pickText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white"
    },
    rating: {
        color: "#b4690e",
        fontSize: 11
    },
    downloads: {
        fontSize: 11,
        color: "white",
    },
    author: {
        fontSize: 11,
        color: "white",
        paddingTop: 5,
        paddingBottom: 5
    },
    section: {
        width: wp("60%"),
        marginRight: 40,
        paddingLeft: 20, 
        paddingRight: 20
    },
    sectionImage: {
        width: wp("65%"),
        height: 150,
        marginTop: 7,
        marginBottom: 7,
    },
    section1: {
        width: wp("50%"),
        marginRight: 20,
        paddingLeft: 20, 
        paddingRight: 20
    },
    sectionImage1: {
        width: wp("50%"),
        height: 150,
        marginTop: 7,
        marginBottom: 7
    },
    bestSeller: {
        width: 70,
        height: 25,
        backgroundColor: "#F0E68C",
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
    },
    bestSellerText: {
        fontSize: 10,
        textAlign: "center",
    }
})

export default styles;
