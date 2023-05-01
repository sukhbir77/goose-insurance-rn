import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/screens/HomeScreen';
import ProfileScreen from '../views/screens/ProfileScreen';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 70,
                paddingTop: 10,
                paddingBottom: 10,
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
                    return <Image source={require("../assets/icons/HomeScreen/nav-home.webp")} style={{
                        height: 20, width: 20, resizeMode: "cover"
                    }} />
                }
            }} />
            <Tab.Screen name="Account" component={ProfileScreen} options={{
                tabBarIcon: () => {
                    return <Image source={require("../assets/icons/HomeScreen/nav-profile.webp")} style={{
                        height: 20, width: 20, resizeMode: "cover"
                    }} />
                }
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigation