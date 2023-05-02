import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        alignItems: "center",
        marginTop: 20
    },
    backArrowLogo: {
        height: 30,
        width: 30
    },
    gooseLogo: {
        height: 50,
        width: 50,
        resizeMode: "contain"
    },
    loginContainer: {
        marginHorizontal: 20,
        marginTop: 30
    },
    loginText: {
        fontSize: 24,
        fontWeight: "500",
        color: "#14162C"
    },
    emailContainer: {
        marginTop: 30
    },
    bodyText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#737387"
    },
    passwordContainer: {
        marginTop: 15
    },
    errorContainer: {
        marginTop: 10,
        alignItems: "center"
    },
    loginButton: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 70,
        backgroundColor: "#F72697",
        alignItems: "center",
        justifyContent: "center"
    }, 
    loginTextButton: {
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#FFF"
    }
});

export default styles;
