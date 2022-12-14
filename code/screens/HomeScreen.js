import React from "react";
import { Button, View, TouchableOpacity, StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {MapScreen} from '../screens/MapScreen';
import {WatchScreen} from '../screens/WatchScreen';
import {BookedScreen} from '../screens/BookedScreen';
import CustomDrawer from'../screens/Drawer';
import {ProfileScreen} from '../screens/ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNav(){
  return(
    <Tab.Navigator
        initialRouteName="Map"
        screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
       >
      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="binoculars" color={color} size={size} />
        ),
      }}
       name="Watch" component={WatchScreen} />
      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map" color={color} size={size} />
        ),
      }} 
      name="Map" component={MapScreen} />
      <Tab.Screen options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bookmark" color={color} size={size} />
        ),
        }} name="Booked" component={BookedScreen} />
    </Tab.Navigator>
  );
}
const HomeScreen = () => {
  return (
    <NavigationContainer independent={true} drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={() => ({
        headerRight: () => (
          <View style={{flexDirection: "row",justifyContent: "flex-end",paddingRight:10,width: 120}}>
          <TouchableOpacity
            onPress={()=>{global.stackNav.navigate('Notifications')}}
            >
            <Icon type="font-awesome" name="bell" color="white" size={17}/>
          </TouchableOpacity>
        </View>
          
        ),
        // onPress={()=>{global.stackNav.navigate('Notifications')}}
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