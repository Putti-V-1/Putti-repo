import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { auth } from '../firebase'
import {styles} from "../Style"
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/core'

const CustomDrawer = props => {
    const navigation = useNavigation()
    return(
        <View style={styles.drawer}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#fff'}}>
                <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <Button style={styles.logout} title="Logout" onPress={()=>{}} />
        </View>
    );
}

export default CustomDrawer;