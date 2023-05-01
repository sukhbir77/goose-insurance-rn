import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

import { GOOSE_LOGO_HOMESCREEN, GIFT_LOGO, LIFE_INSURANCE_LOGO, LOGO_ONE, LOGO_TWO, LOGO_THREE, LOGO_FOUR, LOGO_FIVE } from '../../../utils/images';
import styles from "./styles";

let dummyData: { text: string, logoImage: ImageSourcePropType }[] = [
    {
        text: "Life Insurance",
        logoImage: LOGO_ONE
    },
    {
        text: "Critical Illness",
        logoImage: LOGO_TWO
    }, {
        text: "AD&D Insurance",
        logoImage: LOGO_THREE
    }, {
        text: "Kids Insurance",
        logoImage: LOGO_FOUR
    }, {
        text: "Income Protection",
        logoImage: LOGO_FIVE
    },
    {
        text: "none",
        logoImage: LOGO_FIVE
    },
];

const HomeScreen = () => {
    return (
        <View style={styles.body}>
            <View style={styles.bodyUpperContainer}>
                <View style={styles.headerContainer}>
                    <Image source={GOOSE_LOGO_HOMESCREEN} style={styles.gooseLogoImage} />
                    <Image source={GIFT_LOGO} style={styles.rewardsLogo} />
                </View>
                <Text style={styles.textHeadline}>Hi Sophie, what would you like to protect?</Text>
                <View style={styles.categoryContainer}>
                    <Image source={LIFE_INSURANCE_LOGO} style={styles.categoryImage} />
                    <Text style={styles.categoryText}>Life & Health</Text>
                </View>
            </View>
            <View style={styles.triangle}></View>
            <View style={styles.bodyBottomContainer}>
                {dummyData.map((item, index) => {
                    const splitString = item.text.split(" ")[0] + "\n" + item.text.split(" ")[1];

                    return item.text === "none" ? (
                        <View style={styles.emptyContainer}>
                        </View>
                    ) : (
                        <View style={styles.insuranceCategoriesContainer}>
                            <Image source={item.logoImage} style={styles.insuranceCategoriesImage} />
                            <Text style={styles.insuranceCategoriesText}>{splitString}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    )
}

export default HomeScreen