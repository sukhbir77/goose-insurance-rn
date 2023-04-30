import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';

import { GOOSE_LOGO_LOGIN, BACK_LOGO } from '../../../utils/images';
import InputField from './../../Components/InputField';

const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 20, alignItems: "center", marginTop: 20 }}>
        <Image source={BACK_LOGO} style={{ height: 30, width: 30 }} />
        <Image source={GOOSE_LOGO_LOGIN} style={{ height: 50, width: 50, resizeMode: "contain", }} />
        <View style={{ height: 30, width: 30 }}></View>
      </View>

      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <Text style={{ fontSize: 24, fontWeight: "500", color: "#14162C" }}>Login</Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 12, fontWeight: "500", color: "#737387" }}>ENTER YOUR E-MAIL</Text>
          <InputField mode="email" valueText={email} handleChange={setEmail} />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 12, fontWeight: "500", color: "#737387" }}>PASSWORD</Text>
          <InputField mode="text" valueText={password} handleChange={setPassword} />
        </View>
      </View>

      <View style={{ position: "absolute", bottom: 0, width: "100%", height: 70, backgroundColor: "#F72697", alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => console.log(email, password)} >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default LoginScreen;