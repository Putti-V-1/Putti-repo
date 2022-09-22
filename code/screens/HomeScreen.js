import React from "react";
import { Button, View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {MapScreen} from '../components/MapScreen';
import {WatchScreen} from '../components/WatchScreen';
import {BookedScreen} from '../components/BookedScreen';
import CustomDrawer from'../components/Drawer';
import {ProfileScreen} from '../components/ProfileScreen';
import { useNavigation } from '@react-navigation/core';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNav(){
  return(
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Watch" component={WatchScreen} />
      <Tab.Screen options={{headerShown: false}} name="Map" component={MapScreen} />
      <Tab.Screen options={{headerShown: false}} name="Booked" component={BookedScreen} />
    </Tab.Navigator>
  );
}

const HomeScreen = ({route}) => {
  const tabNav = route.params.stackNav;
  return (
    <NavigationContainer independent={true} drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={() => ({
        headerRight: () => (
          <Button
            onPress={()=>{tabNav.navigate('Notifications')}}
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