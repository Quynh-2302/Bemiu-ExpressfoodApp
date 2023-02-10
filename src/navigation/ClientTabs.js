import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { colors } from '../global/styles'
import { Icon } from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreeen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import { ClientStack } from './clientStack';
import Mypayment from '../Payment/Mypayment';

const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs() {

    return (
        <ClientTabs.Navigator
            tabBarOptions={{
                activeTintColor: colors.buttons
            }}
        >
            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='home'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }

            />


            <ClientTabs.Screen
                name="SearchScreen"
                component={ClientStack}
                options={
                    {
                        tabBarLabel: "Search",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='search'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }

            />



            <ClientTabs.Screen
                name="MyOrdersScreen"
                component={MyOrdersScreen}
                options={
                    {
                        tabBarLabel: "My Orders",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='view-list'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }

            />


            <ClientTabs.Screen
                name="Mypayment"
                component={Mypayment}
                options={
                    {
                        tabBarLabel: "Mypayment",
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='person'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }

            />




        </ClientTabs.Navigator>
    )
}