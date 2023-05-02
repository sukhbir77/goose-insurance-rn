import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#F4F4F4"
    },
    headerContainer: {
        marginLeft: 20
    },
    chatContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 20,
        width: "90%",
        height: 100,
        backgroundColor: "#FFF",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 30,
    },
    image: {
        height: 60,
        width: 60,
        resizeMode: "contain",
        marginLeft: 10,
    },
    chatTextContainer: {
        flexDirection: "column",
        rowGap: 5
    },
    imageChat: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        marginLeft: 20,
    },
    callContainerTextHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    phoneNumber: {
        backgroundColor: "#F72697",
        height: 30,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    phoneText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FFF"
    },
    nameText: {
        color: "#14162C",
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 20
    },
    bodyText: {
        fontSize: 18,
        color: "#737387"
    },
    bodyTextSmall: {
        fontSize: 14,
        color: "#14162C"
    },
    shadow: {
        shadowColor: "black",
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 10
    }
});

export default styles;
