import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Constants from "expo-constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingTop: Constants.statusBarHeight
    },
    topHeader: {
        width: wp("100%"),
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15
    },
    flex: {
        display: "flex",
        flexDirection: "row",
    },
    topHeaderText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white"
    },
    topDetailsText: {
        fontSize: 18,
        color: "white"
    },
    body: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 20
    },
    detailsBody: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 10,
    },
    image: {
        width: wp("20%"),
        height: 50,
    },
    right: {
        width: wp("70%"),
        paddingLeft: 10,

    },
    pickText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white"
    },
    author: {
        fontSize: 11,
        color: "white",
        paddingTop: 5,
        paddingBottom: 5
    },
    padding: {
        paddingLeft: 15,
        paddingRight: 15
    },
    rating: {
        color: "#b4690e",
        fontSize: 11
    },
    downloads: {
        fontSize: 11,
        color: "white",
    },
    pickText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white"
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