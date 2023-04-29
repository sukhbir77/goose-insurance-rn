import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    socialMediaContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    borderBottom: {
        borderColor: "#f0f0f0",
        borderBottomWidth: 1,
    },
    socialMediaText: {
        fontSize: 14,
        color: "#000000"
    },
    socialMediaLogo: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        marginRight: 20
    },
    emailLogo: {
        height: 30,
        width: 30,
        resizeMode: "contain",
        marginRight: 20
    },
});

export default styles;