import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from "../Style"


function planTrip(){
  global.stackNav.navigate("Plan")
}


export function WatchScreen() {
  if(global.user["driver"]){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
            onPress={planTrip}
            //style={styles.tripBtn}
            >
            <Text style={styles.tripBtnText}>Skra ferð</Text>
        </TouchableOpacity>
        <Text>Vaktin</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Vaktin</Text>
    </View>
  );
}