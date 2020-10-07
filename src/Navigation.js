import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';
import NotificationsScreen from './screens/Notifications';
import SettingsScreen from './screens/Settings';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },
    Settings: {
        lib: AntDesign,
        name: 'setting',
    },
};

export default function Navigation(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route, navigation, focused }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Pay'){
                        return (
                            <PayButton 
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused}
                            />
                        );
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                },
                activeTintColor: '#43cea2',
                inactiveTintColor: '#92929c',
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                title: 'Início',
            }}
            />
            <Tab.Screen 
            name="Wallet" 
            component={WalletScreen}
            options={{
                title: 'Carteira',
            }} 
            />
            <Tab.Screen 
            name="Pay" 
            component={PayScreen}
            options={{
                title: '',
            }} 
            />

            <Tab.Screen 
            name="Notifications" 
            component={NotificationsScreen}
            options={{
                title: 'Notificações',
            }} 
            />
            <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
                title: 'Ajustes',
            }} 
            />
        </Tab.Navigator>
    );
}
