import React from "react";
import { Button } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {MapScreen} from '../components/MapScreen';
import {WatchScreen} from '../components/WatchScreen';
import {BookedScreen} from '../components/BookedScreen';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'

const Tab = createBottomTabNavigator();


const HomeScreen = () => {
    const navigation = useNavigation()
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
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
            <Tab.Screen options={headerOptions} name="Watch" component={WatchScreen} />
            <Tab.Screen options={headerOptions} name="Map" component={MapScreen} />
            <Tab.Screen options={headerOptions} name="Booked" component={BookedScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default HomeScreen