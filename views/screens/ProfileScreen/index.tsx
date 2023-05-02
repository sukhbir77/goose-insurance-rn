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
import { BIRTHDAY_LOGO, HOME_LOGO, PLUS_LOGO} from "../../../utils/images";
import styles from "./styles";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.body}>

      {/* User Details Container */}
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{user.name}</Text>

        {/* Birthday Container*/}
        <View style={styles.bodyDetailsContainer}>
          <Image source={BIRTHDAY_LOGO} style={styles.logo} />
          <Text style={styles.bodyText}>{user.birthday}</Text>
        </View>

        {/* Address Container */}
        <View
          style={[styles.bodyDetailsContainer, { alignItems: "flex-start" }]}
        >
          <Image source={HOME_LOGO} style={styles.logo} />
          <View style={styles.addressTextContainer}>
            <Text style={styles.bodyText}>{user.address}</Text>
          </View>
        </View>
      </View>

      {/* Add Family Member Container */}
      <View
        style={styles.addContainer}
      >
        <Text style={styles.addTextHeader}>
          My Family
        </Text>
        <View
          style={styles.addSubContainer}
        >
          <Image
            source={PLUS_LOGO}
            style={styles.plusLogo}
          />
          <Text style={styles.plusLogoText}>Add family member</Text>
        </View>
      </View>

      {/* Add Payment Method Container */}
      <View
        style={styles.addContainer}
      >
        <Text style={styles.addTextHeader}>
          Payment Methods
        </Text>
        <View
          style={styles.addSubContainer}
        >
          <Image
            source={PLUS_LOGO}
            style={styles.plusLogo}
          />
          <Text style={styles.plusLogoText}>Add Payment method</Text>
        </View>
      </View>

      {/* Logout Button Container */}
      <View
        style={styles.logoutContainer}
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
