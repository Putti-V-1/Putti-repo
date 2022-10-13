import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import NotificationScreen from './screens/NotificationScreen'
import PlanScreen from './screens/PlanScreen'
import RequestRideScreen from './screens/RequestRideScreen';
import ProfileScreen from './screens/ProfileScreen'
import EditProfile from './screens/EditProfile'
import FavoriteScreen from './screens/FavoriteScreen';
import HelpScreen from './screens/HelpScreen';
import PaymentScreen from './screens/PaymentScreen';



const Stack = createNativeStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        <Stack.Screen name="Plan" component={PlanScreen} />
        <Stack.Screen name="RequestRide" component={RequestRideScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
        <Stack.Screen name="helpScreen" component={HelpScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}