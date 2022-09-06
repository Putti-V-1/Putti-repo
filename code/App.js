import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from './components/HomeScreen';
import {WatchScreen} from './components/WatchScreen';
import {BookedScreen} from './components/BookedScreen';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Watch" component={WatchScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Booked" component={BookedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}