import {
  View,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

import { PHONE_LOGO, CONTACT_EMAIL_LOGO, CALL_LOGO } from "../../../utils/images";
import styles from "./styles";

const ContactScreen = () => {

  return (
    <SafeAreaView style={styles.body}>

      {/* Header Text */}
      <View style={styles.headerContainer}>
        <Text style={styles.nameText}>Contact Goose</Text>
        <Text style={styles.bodyText}>We'd love to hear from you!</Text>
      </View>

      {/* Live Chat Container */}
      <View style={[
        styles.shadow,
        styles.chatContainer
      ]}
      >
        <Image
          source={PHONE_LOGO}
          style={styles.image}
        />
        <View style={styles.chatTextContainer}>
          <Text style={[styles.nameText, { marginTop: 0 }]}>Live Chat</Text>
          <Text style={styles.bodyTextSmall}>With a friendly Goose Agent!</Text>
        </View>
      </View>

      {/* Email Container */}
      <View
        style={[
          styles.shadow, styles.chatContainer
        ]}
      >
        <Image
          source={CONTACT_EMAIL_LOGO}
          style={styles.imageChat}
        />
        <View style={styles.chatTextContainer}>
          <Text style={[styles.nameText, { marginTop: 0 }]}>Email</Text>
          <Text style={styles.bodyTextSmall}>support@gooseinsurance.com</Text>
        </View>
      </View>

      {/* Call Container */}
      <View
        style={[
          styles.shadow, styles.chatContainer,
          {
            height: 150,
          },
        ]}
      >
        <Image
          source={CALL_LOGO}
          style={[styles.image, { marginLeft: 20 }]}
        />
        <View style={styles.chatTextContainer}>
          <Text style={[styles.nameText, { marginTop: 0 }]}>Call</Text>

          {/* North America */}
          <View
            style={styles.callContainerTextHeader}
          >
            <Text style={[styles.bodyTextSmall, { width: 100 }]}>
              N.America
            </Text>
            <View
              style={styles.phoneNumber}
            >
              <Text style={styles.phoneText}>
                +1 (888) 374-6673
              </Text>
            </View>
          </View>

          {/* International */}
          <View style={styles.callContainerTextHeader}>
            <Text style={[styles.bodyTextSmall, { width: 100 }]}>
              International
            </Text>
            <View
              style={styles.phoneNumber}
            >
              <Text style={styles.phoneText}>
                +1 (604) 305-0500
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContactScreen;
