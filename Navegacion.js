import React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import Feather from '@expo/vector-icons/Feather';

// Screens
import Settings from './Screens/Settings';
import Home from './Screens/Home';
import Users from './Screens/Users';
import DetailsHome from './Screens/DetailsHome';
import AnotherDetailsHome from './Screens/AnotherDetailsHome';


const Tab = createBottomTabNavigator();


function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >

            <Tab.Screen name='Home' component={Home} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color,size}) => (
                    <Feather name="home" size={24} color="black" />
                )
                
            }}
            />
            <Tab.Screen name='Settings' component={Settings}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({color,size}) => (
                    <Feather name="settings" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen name='Users' component={Users} 
             options={{
                tabBarLabel: 'Users',
                tabBarIcon: ({color,size}) => (
                    <Feather name="users" size={24} color="black" />
                )
            }}
            
            
            
            />
        </Tab.Navigator>

    )

};

function Navegacion() {
    return (
        <NavigationContainer>

            <MyTabs />
        </NavigationContainer>
    )

}


export default Navegacion;

const DetailsHomeNavigator = createStackNavigator();

function StackDetailHome() {
    return (
        <DetailsHomeNavigator.Navigator
        initialRouteName='Home'>

            <DetailsHomeNavigator.Screen
            name = "Home"
            component = {Home}
            >
            </DetailsHomeNavigator.Screen>

            <DetailsHomeNavigator.Screen
            name = "DetailHome"
            component={DetailsHome}
            >
            </DetailsHomeNavigator.Screen>
            <DetailsHomeNavigator
                name = "AnotherDetailsHome"
                component = {AnotherDetailsHome}
            >
            </DetailsHomeNavigator>



        </DetailsHomeNavigator.Navigator>
    )
}