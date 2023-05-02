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
        marginTop: 20
    },
    bodyDetailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        columnGap: 10
    },
    bodyText: {
        fontSize: 18,
        color: "#737387"
    },
    bodyTextSmall: {
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

    shadow: {
        shadowColor: "black",
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10
    }
});

export default styles;
