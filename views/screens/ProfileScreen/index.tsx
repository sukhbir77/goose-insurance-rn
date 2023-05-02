import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser, deleteUser } from '../../../redux/slicers/userSlicer';
import { BIRTHDAY_LOGO, HOME_LOGO } from '../../../utils/images';
import styles from './styles';

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <View style={styles.detailsContainer}>
        <Text style={styles.nameText}>{user.name}</Text>
        <View style={styles.bodyDetailsContainer}>
          <Image source={BIRTHDAY_LOGO} style={styles.logo} />
          <Text style={styles.bodyText}>{user.birthday}</Text>
        </View>
        <View style={[styles.bodyDetailsContainer, { alignItems: "flex-start" }]}>
          <Image source={HOME_LOGO} style={styles.logo} />
          <View style={styles.addressTextContainer}>
            <Text style={styles.bodyText}>{user.address}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={() => dispatch(deleteUser())}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen