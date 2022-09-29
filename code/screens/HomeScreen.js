import React from "react";
import { Button, View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {MapScreen} from '../screens/MapScreen';
import {WatchScreen} from '../screens/WatchScreen';
import {BookedScreen} from '../screens/BookedScreen';
import CustomDrawer from'../screens/Drawer';
import {ProfileScreen} from '../screens/ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ref, get, child } from 'firebase/database';

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
  get(child(ref(global.db), `users/${global.user["uid"]}`)).then((snapshot) => {
    if (snapshot.exists()) {
      global.user = snapshot.val();
    }else{
      stackNav.replace("login")
    }
  })
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