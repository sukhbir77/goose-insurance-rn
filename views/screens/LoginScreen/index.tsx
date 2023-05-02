import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../redux/slicers/userSlicer';
import { addProducts } from '../../../redux/slicers/productSlicer';

import { GOOSE_LOGO_LOGIN, BACK_LOGO } from '../../../utils/images';
import InputField from './../../Components/InputField';
import axios from 'axios';

import styles from './styles';

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const getData = () => {
    axios.post('https://gslwn81z5i.execute-api.us-east-2.amazonaws.com/goose/technical-challenge/login', {
      email,
      password
    })
      .then(function (response) {
        if (response.status === 200) {
          dispatch(addUser(response.data.user));
          dispatch(addProducts(response.data.products));
          setError(false);
        }
      })
      .catch(function (error) {
        setError(true);
      });
  }

  return (
    <View style={styles.body}>
      <View style={styles.headerContainer}>
        <Image source={BACK_LOGO} style={styles.backArrowLogo} />
        <Image source={GOOSE_LOGO_LOGIN} style={styles.gooseLogo} />
        <View style={styles.backArrowLogo}></View>
      </View>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.emailContainer}>
          <Text style={styles.bodyText}>ENTER YOUR E-MAIL</Text>
          <InputField mode="email" valueText={email} handleChange={setEmail} />
        </View>
        <View style={styles.passwordContainer}>
          <Text style={styles.bodyText}>PASSWORD</Text>
          <InputField mode="text" valueText={password} handleChange={setPassword} />
        </View>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={[styles.bodyText, { color: "red" }]}>Please Enter Valid Credentials</Text>
        </View>
      )}

      <View style={styles.loginButton}>
        <TouchableOpacity onPress={() => getData()} >
          <Text style={styles.loginTextButton}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default LoginScreen;