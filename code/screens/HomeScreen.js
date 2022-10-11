import React from "react";
import { Button, View, Text, StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {MapScreen} from '../screens/MapScreen';
import {WatchScreen} from '../screens/WatchScreen';
import {BookedScreen} from '../screens/BookedScreen';
import CustomDrawer from'../screens/Drawer';
import {ProfileScreen} from '../screens/ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {SetGlobals} from './SetGlobals';
import icons from './assets/logo.jpg';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNav(){
  return(
    <Tab.Navigator initialRouteName="Map">
      <Tab.Screen options={{headerShown: false}} name="Watch" component={WatchScreen} />
      <Tab.Screen options={{headerShown: false}} name="Map" component={MapScreen} />
      <Tab.Screen options={{headerShown: false}} name="Booked" component={BookedScreen} />
    </Tab.Navigator>
  );
}
const HomeScreen = () => {
  SetGlobals();
  return (
    <NavigationContainer independent={true} drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={() => ({
        headerRight: () => (
          <Button
            onPress={()=>{global.stackNav.navigate('Notifications')}}
            title="Notif"
            color="#fff"
          />
        ),
        headerStyle: {
          backgroundColor: 'gray',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })

      }>
        <Drawer.Screen name="Tabs" component={TabNav} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
})