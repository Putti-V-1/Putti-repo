import * as React from 'react';
import { Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from "../Style"

function renderRide(ride){
  return (
    <TouchableOpacity>
      <Text>
        {ride.key}
      </Text>
    </TouchableOpacity>)
}

export function WatchScreen() {
  console.log("watch ", global.rides);
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {global.rides.map((ride) => {return renderRide(ride)})}
      <TouchableOpacity
          onPress={()=>{global.stackNav.navigate("Plan")}}
          //style={styles.tripBtn}
          >
          <Text style={styles.tripBtnText}>Skra ferð</Text>
      </TouchableOpacity>
    </View>
  )
}

