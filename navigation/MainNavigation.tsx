import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../views/screens/LoginScreen';
import WelcomeScreen from './../views/screens/WelcomeScreen';
import TabNavigation from './TabNavigation';
import { NavigationProp } from '@react-navigation/native';

export type ScreenNames = ["TabNavigation", "Welcome", "Login"];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default MainNavigation