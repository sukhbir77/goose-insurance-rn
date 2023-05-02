import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from '../views/screens/HomeScreen';
import ProfileScreen from '../views/screens/ProfileScreen';
import ContactScreen from '../views/screens/ContactScreen';
import { HOME_TAB_LOGO, CONTACT_LOGO, PROFILE_TAB_LOGO } from '../utils/images';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 80,
                paddingTop: 10,
                paddingBottom: 20,
                paddingHorizontal: 60,
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFF',
            },
            tabBarLabelStyle: {
                fontSize: 11
            },
            tabBarActiveTintColor: "#F72697",
            tabBarInactiveTintColor: "#54566F"
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: () => {
                    return <Image source={HOME_TAB_LOGO} style={{
                        height: 20, width: 20, resizeMode: "cover"
                    }} />
                }
            }} />
            <Tab.Screen name="Contact" component={ContactScreen} options={{
                tabBarIcon: () => {
                    return <Image source={CONTACT_LOGO} style={{
                        height: 20, width: 20, resizeMode: "cover"
                    }} />
                }
            }} />
            <Tab.Screen name="Account" component={ProfileScreen} options={{
                tabBarIcon: () => {
                    return <Image source={PROFILE_TAB_LOGO} style={{
                        height: 20, width: 20, resizeMode: "cover"
                    }} />
                }
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigation