import { View, Text, Image, SafeAreaView } from 'react-native';
import React from 'react';

import { FLAG_CANADA, GOOSE_LOGO, FACEBOOK_LOGO, GOOGLE_LOGO, APPLE_LOGO, EMAIL_LOGO } from '../../../utils/images';
import SocialMedia from '../../Components/SocialMedia';
import styles from "./styles";

const WelcomeScreen = () => {
    return (
        <SafeAreaView style={styles.parentContainer}>

            <View style={styles.childTopContainer}>

                <View style={styles.flagCanadaContainer}>
                    <Image source={FLAG_CANADA} style={styles.flagCanada} />
                </View>

                <View style={styles.gooseLogoContainer}>

                    <Image source={GOOSE_LOGO} style={styles.gooseLogo} />
                    <View style={{ marginTop: "5%" }}>
                        <Text style={styles.insuranceLogoText}>THE INSURANCE SUPER-APP</Text>
                    </View>

                </View>

            </View>

            <View style={styles.loginContainer}>
                <View style={styles.loginContainerChild}>
                    <SocialMedia logo={FACEBOOK_LOGO} text="Continue with Facebook" />
                    <SocialMedia logo={GOOGLE_LOGO} text="Continue with Google" />
                    <SocialMedia logo={APPLE_LOGO} text="Continue with Apple" />
                    <SocialMedia logo={EMAIL_LOGO} text="Login with Email" />
                </View>
            </View>

            <View style={styles.childBottomContainer}>

                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <Text style={styles.footerTextOne}>Terms of Service</Text>
                    <Text style={styles.footerTextOne}>  |  </Text>
                    <Text style={styles.footerTextOne}>Privacy Policy</Text>
                </View>

                <Text style={styles.footerTextTwo}>Insurance is sold by Goose Insurance and underwritten by various companies</Text>

            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;
