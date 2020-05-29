import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//pages
import PrivateAccountPage from '../pages/PrivateAccountPage';
import PublicAccountPage from '../pages/PublicAccount';
import PublicAccountAnalysis from '../pages/PublicAccountAnalysis';

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Private Account') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                } else if (route.name === 'Public Account') {
                    iconName = focused ? 'ios-search' : 'ios-search';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Private Account" component={PrivateAccountPage} {...props}/>
            <Tab.Screen name="Public Account" component={PublicAccountPage} {...props}/>
        </Tab.Navigator>
    );
}