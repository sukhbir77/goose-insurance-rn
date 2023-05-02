import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#F4F4F4"
    },
    detailsContainer: {
        backgroundColor: "#FFF"
    },
    nameText: {
        color: "#14162C",
        fontSize: 28,
        fontWeight: "bold",
        paddingHorizontal: 20,
        marginTop: 20
    },
    bodyDetailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        columnGap: 10,
    },
    bodyText: {
        fontSize: 14,
        color: "#14162C"
    },
    logo: {
        height: 20,
        width: 20
    },
    addressTextContainer: {
        flexDirection: "row",
        width: 140,
        flexWrap: "wrap"
    },
    logoutContainer: {
        height: 170,
        justifyContent: "center",
        backgroundColor: "#FFF",
        marginTop: 20,
    },
    logoutButton: {
        marginVertical: 50,
        alignSelf: "center",
        height: 70,
        width: "90%",
        paddingHorizontal: 20,
        backgroundColor: "#F72697",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "500"
    },
    addContainer: {
        height: 100,
        backgroundColor: "#FFF",
        marginTop: 20,
        rowGap: 20,
        padding: 20,
    },
    addTextHeader: {
        color: "#000",
        fontSize: 14,
        fontWeight: "bold"
    },
    addSubContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    plusLogo: {
        height: 30,
        width: 30,
        resizeMode: "contain"
    },
    plusLogoText: {
        color: "#F72697",
        fontSize: 14,
        fontWeight: "bold"
    }
});

export default styles;
