import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#F9F9F9"
    },
    bodyUpperContainer: {
        height: 230,
        backgroundColor: "#F9F9F9"

    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    gooseLogoImage: {
        height: 60,
        width: 110,
        resizeMode: "contain"
    },
    rewardsLogo: {
        height: 30,
        width: 30
    },
    textHeadline: {
        fontSize: 17,
        color: "#54566F",
        alignSelf: "center"
    },
    categoryContainer: {
        width: 100,
        marginLeft: 30,
        alignItems: "center",
        marginTop: 20
    },
    categoryImage: {
        height: 60,
        width: 60,
        resizeMode: "contain"
    },
    categoryText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#14162C"
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 30,
        borderRightWidth: 30,
        borderBottomWidth: 20,
        marginLeft: 50,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#FFCEE9",
    },
    bodyBottomContainer: {
        flex: 2,
        backgroundColor: "#FFCEE9",
        flexDirection: "row",
        justifyContent: 'center'
    },
    bodyCategoriesContainer: {
        width: 340,
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        marginTop: 20,
        rowGap: 20,
    },
    emptyContainer: {
        height: 100,
        width: 100,
        backgroundColor: "#FFCEE9"
    },
    insuranceCategoriesContainer: {
        height: 100,
        width: 100,
        backgroundColor: "#FFF",
        borderRadius: 10,
        alignItems: "center",
        padding: 5
    },
    insuranceCategoriesImage: {
        height: 60,
        width: 70,
        resizeMode: "contain"
    },
    insuranceCategoriesText: {
        fontSize: 12,
        fontWeight: "500",
        textAlign: "center"
    },
    elevation: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
});

export default styles;
