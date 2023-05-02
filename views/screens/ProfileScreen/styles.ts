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
        marginTop: 50
    },
    bodyDetailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        columnGap: 10
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
    }
});

export default styles;
