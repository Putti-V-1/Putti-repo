import React from "react";
import { Button, View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {MapScreen} from '../components/MapScreen';
import {WatchScreen} from '../components/WatchScreen';
import {BookedScreen} from '../components/BookedScreen';
import CustomDrawer from'../components/Drawer';
import {ProfileScreen} from '../components/ProfileScreen';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const headerOptions = {
  headerRight: () => (
    <Button
      onPress={() => {
        auth
          .signOut()
          .then(() => {
              navigation.navigate('Login');
          })
          .catch(error => alert(error.message))
      }}
      title="Logout"
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
}

function TabNav(){
  return(
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Watch" component={WatchScreen} />
      <Tab.Screen options={{headerShown: false}} name="Map" component={MapScreen} />
      <Tab.Screen options={{headerShown: false}} name="Booked" component={BookedScreen} />
    </Tab.Navigator>
  );
}

const HomeScreen = () => {
    return (
      <NavigationContainer independent={true} drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Tabs" component={TabNav} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default HomeScreen