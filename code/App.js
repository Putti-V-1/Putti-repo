import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import NotificationScreen from './screens/NotificationScreen'
import PlanScreen from './screens/PlanScreen'
import ProfileScreen from './screens/ProfileScreen'

const Stack = createNativeStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Plan" component={PlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}