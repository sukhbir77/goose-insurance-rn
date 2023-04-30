import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from '../../../navigation/types';

import styles from "./styles";

interface SocialMedia {
    logo: any;
    text: string;
}

const SocialMedia = (props: SocialMedia) => {
    const ifEmail = props.text.includes("Email");
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <TouchableOpacity
            style={ifEmail ? [styles.socialMediaContainer, { paddingHorizontal: 30 }]
                : [styles.socialMediaContainer, styles.borderBottom]}
            onPress={() => ifEmail && navigation.navigate("Login")}>
            <Image source={props.logo} style={ifEmail ? styles.emailLogo : styles.socialMediaLogo} />
            <Text style={styles.socialMediaText}>{props.text}</Text>
        </TouchableOpacity >
    )
}

export default SocialMedia