import { View, Text, Image } from 'react-native';
import React from 'react';

import styles from "./styles";

interface SocialMedia {
    logo: any;
    text: string;
}

const SocialMedia = (props: SocialMedia) => {
    const ifEmail = props.text.includes("Email");

    return (
        <View style={ifEmail ? [styles.socialMediaContainer, { paddingHorizontal: 30 }] : [styles.socialMediaContainer, styles.borderBottom]}>
            <Image source={props.logo} style={ifEmail ? styles.emailLogo : styles.socialMediaLogo} />
            <Text style={styles.socialMediaText}>{props.text}</Text>
        </View >
    )
}

export default SocialMedia