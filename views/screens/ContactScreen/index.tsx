import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectUser, deleteUser } from "../../../redux/slicers/userSlicer";
import { BIRTHDAY_LOGO, HOME_LOGO } from "../../../utils/images";
import styles from "./styles";

const ContactScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ marginLeft: 20 }}>
        <Text style={styles.nameText}>Contact Goose</Text>
        <Text style={styles.bodyText}>We'd love to hear from you!</Text>
      </View>
      <View
        style={[
          styles.shadow,
          {
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
        ]}
      >
        <Image
          source={require("../../../assets/icons/ProfileScreen/phoneChat.png")}
          style={{
            height: 60,
            width: 60,
            resizeMode: "contain",
            marginLeft: 10,
          }}
        />
        <View style={{ flexDirection: "column", rowGap: 5 }}>
          <Text style={[styles.nameText, { marginTop: 0 }]}>Live Chat</Text>
          <Text style={styles.bodyTextSmall}>With a friendly Goose Agent!</Text>
        </View>
      </View>
      <View
        style={[
          styles.shadow,
          {
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
        ]}
      >
        <Image
          source={require("../../../assets/icons/ProfileScreen/email.png")}
          style={{
            height: 50,
            width: 50,
            resizeMode: "contain",
            marginLeft: 20,
          }}
        />
        <View style={{ flexDirection: "column", rowGap: 5 }}>
          <Text style={[styles.nameText, { marginTop: 0 }]}>Email</Text>
          <Text style={styles.bodyTextSmall}>support@gooseinsurance.com</Text>
        </View>
      </View>
      <View
        style={[
          styles.shadow,
          {
            flexDirection: "row",
            alignItems: "center",
            columnGap: 20,
            width: "90%",
            height: 200,
            backgroundColor: "#FFF",
            borderRadius: 10,
            alignSelf: "center",
            marginTop: 30,
          },
        ]}
      >
        <Image
          source={require("../../../assets/icons/ProfileScreen/call.webp")}
          style={{
            height: 60,
            width: 60,
            resizeMode: "contain",
            marginLeft: 20,
          }}
        />
        <View style={{ flexDirection: "column", rowGap: 5 }}>
          <Text style={[styles.nameText, { marginTop: 0 }]}>Call</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={[styles.bodyTextSmall, { width: 100 }]}>
              N.America
            </Text>
            <View
              style={{
                backgroundColor: "#F72697",
                height: 30,
                width: 150,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold", color: "#FFF" }}>
                +1 (888) 374-6673
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[styles.bodyTextSmall, { width: 100 }]}>
              International
            </Text>
            <View
              style={{
                backgroundColor: "#F72697",
                height: 30,
                width: 150,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold", color: "#FFF" }}>
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
