import React from 'react'
import { Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import Feather from '@expo/vector-icons/Feather';

import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

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
            initialRouteName='HomeScreen'
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >

            <Tab.Screen name='HomeScreen' component={StackDetailHome} 
            options={{
                tabBarLabel: 'HomeScreen',
                tabBarIcon: ({color,size}) => (
                    <Feather name="home" size={24} color="black" />
                ),
                headerShown: false, // Esto oculta el encabezado del StackNavigator
            }}
            />
            <Tab.Screen name='SettingsScreen' component={Settings}
            options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({color,size}) => (
                    <Feather name="settings" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen name='Drawer' component={DrawerNavigate} 
             options={{
                tabBarLabel: 'Users',
                tabBarIcon: ({color,size}) => (
                    <Feather name="users" size={24} color="black" />
                ),
                headerShown: false, // Esto oculta el encabezado del StackNavigator
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

const Drawer = createDrawerNavigator();

function DrawerNavigate(){
    return(
        <Drawer.Navigator initialRouteName='User'>
            <Drawer.Screen name="User" component={Users} 
            options={{
                drawerIcon: ({ color, size }) => (
                  <Feather name="user" size={15} color={color} />
                )
              }}
            />
            <Drawer.Screen name="DetailHome" component={DetailsHome} 
            options={{
                drawerIcon: ({ color, size }) => (
                  <Feather name="file-text" size={15} color={color} />
                )
              }}/>
            <Drawer.Screen name="OtroDetalle" component={AnotherDetailsHome} 
             options={{
                drawerIcon: ({ color, size }) => (
                  <Feather name="layers" size={15} color={color} />
                )
              }}/>
            
        </Drawer.Navigator>
    )

}

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
            <DetailsHomeNavigator.Screen
                name = "AnotherDetailsHome"
                component = {AnotherDetailsHome}
            >
            </DetailsHomeNavigator.Screen>
        </DetailsHomeNavigator.Navigator>
    )
}