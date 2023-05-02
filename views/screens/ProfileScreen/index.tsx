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

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{user.name}</Text>
        <View style={styles.bodyDetailsContainer}>
          <Image source={BIRTHDAY_LOGO} style={styles.logo} />
          <Text style={styles.bodyText}>{user.birthday}</Text>
        </View>
        <View
          style={[styles.bodyDetailsContainer, { alignItems: "flex-start" }]}
        >
          <Image source={HOME_LOGO} style={styles.logo} />
          <View style={styles.addressTextContainer}>
            <Text style={styles.bodyText}>{user.address}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 100,
          backgroundColor: "#FFF",
          marginTop: 20,
          rowGap: 20,
          padding: 20,
        }}
      >
        <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}>
          My Family
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/icons/ProfileScreen/plus.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
          <Text style={{color: "#F72697", fontSize: 14, fontWeight: "bold"}}>Add family member</Text>
        </View>
      </View>
      <View
        style={{
          height: 100,
          backgroundColor: "#FFF",
          marginTop: 20,
          rowGap: 20,
          padding: 20,
        }}
      >
        <Text style={{ color: "#000", fontSize: 14, fontWeight: "bold" }}>
          Payment Methods
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/icons/ProfileScreen/plus.png")}
            style={{ height: 30, width: 30, resizeMode: "contain" }}
          />
          <Text style={{color: "#F72697", fontSize: 14, fontWeight: "bold"}}>Add Payment method</Text>
        </View>
      </View>
      <View
        style={{
          height: 170,
          justifyContent: "center",
          backgroundColor: "#FFF",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => dispatch(deleteUser())}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
