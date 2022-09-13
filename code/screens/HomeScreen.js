import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {MapScreen} from '../components/MapScreen';
import {WatchScreen} from '../components/WatchScreen';
import {BookedScreen} from '../components/BookedScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen options={{headerShown: false}} name="Watch" component={WatchScreen} />
            <Tab.Screen options={{headerShown: false}} name="Map" component={MapScreen} />
            <Tab.Screen options={{headerShown: false}} name="Booked" component={BookedScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default HomeScreen