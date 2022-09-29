import React from "react";
import { Button, View} from "react-native";
import {styles} from "../Style"
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';

const CustomDrawer = props => {
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